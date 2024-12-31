const express = require('express')
const http = require("http")
const {Server} = require("socket.io")

const app = express()
const server = http.createServer(app)
const webserver = new Server(server,{cors: {
    origin: "https://cucuridu.web.app",
    methods: ["GET", "POST"],
}})

const port = process.env.PORT || 3000
const {RoomPool} = require('./api/Room')
const Rooms = new RoomPool()

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

/*Gestione utente*/
webserver.on("connection",(socket) => {
    webserver.to(socket.id).emit("connected",socket.id)
    console.log("User : " + socket.id + " connected")
    
    socket.on("createRoom",(data) => {
        try
        {
            const room = Rooms.Create(data.name,socket.id,data.img)
            socket.join(room.id)
            console.log("Room : " + room.id + " created")
            webserver.to(socket.id).emit("roomCreated",{roomId : room.id, user : room.admin.toJSON()})
        }
        catch(error)
        {
            console.log(error)
        }
    })

    socket.on("joinRoom",(data) => {
        try
        {
            const room = Rooms.FindRoom(data.roomId)
            if(!room)
            {
                webserver.to(socket.id).emit("roomNotExist", "Not exist")
                return
            }
            const user = room.Add(data.name,socket.id,data.img)
            if(!user)
            {
                webserver.to(socket.id).emit("alreadyRound", "Not now")
                return
            }
            webserver.to(room.id).emit('playerJoined')
            socket.join(room.id)
            console.log("Room : " + room.id + " joined " + socket.id)
            webserver.to(socket.id).emit('joinedRoom', {user : user.toJSON(), roomId : room.id})
        }
        catch(error)
        {
            console.log(error)
        }
    })

    socket.on("startRound", (data) => {
        try
        {
            const room = Rooms.FindRoomByUser(data.id)
            if(!room)
            {
                webserver.to(socket.id).emit("error", "Not exist")
                return
            }
            if(room.Asker.unicid != data.id)
            {
                webserver.to(socket.id).emit("error", "No you idiot")
                return
            }
            const resp = room.StartRound()
            if(resp == false)
            {
                webserver.to(socket.id).emit("downUsers", "Not now")
                return
            }
            else if(resp == null)
            {
                const result = room.ResultGame()
                webserver.to(room.id).emit('gameEnded', {result : result.map((u) => u.toJSON())})
                Rooms.Destroy(room.id)
                console.log("Room : " + room.id + " destroyed")
            }
            webserver.to(room.id).emit('questionRe', {question : room.CurrentRound.question.toJSON()})
            console.log("Room : " + room.id + " round started")
        }
        catch(error)
        {
            console.log(error)
        }
    })

    socket.on("infoRoom",(data) => {
        try
        {
            const room = Rooms.FindRoomByUser(data.id)
            if(!room)
            {
                webserver.to(socket.id).emit("error", "Not exist")
                return
            }
            webserver.to(socket.id).emit('infoRoomed', {room : room.infoJSON()})
        }
        catch(error)
        {
            console.log(error)
        }
    })

    socket.on("numberRoom",(data) => {
        try
        {
            const room = Rooms.FindRoomByUser(data.id)
            if(!room)
            {
                webserver.to(socket.id).emit("error", "Not exist")
                return
            }
            webserver.to(socket.id).emit('numberRoomed', {room : room.users.length})
        }
        catch(error)
        {
            console.log(error)
        }
    })

    socket.on("answersRoom",(data) => {
        try
        {
            const room = Rooms.FindRoomByUser(data.id)
            if(!room)
            {
                webserver.to(socket.id).emit("error", "Not exist")
                return
            }
            webserver.to(socket.id).emit('answersRoomed', {room : room.users.length, number : room.CurrentRound.count})
        }
        catch(error)
        {
            console.log(error)
        }
    })

    socket.on("getAnswers",(data) => {
        try
        {
            const room = Rooms.FindRoomByUser(data.id)
            if(!room)
            {
                webserver.to(socket.id).emit("error", "Not exist")
                return
            }
            const result = room.GetAnswers()
            if(!result)
            {
                webserver.to(socket.id).emit("answersYet", "Not now")
                return
            }
            webserver.to(socket.id).emit('gettedAnswers', {answers : result.map((resu) => [
                resu[0].toJSON(),
                resu[1].map((card) => card.toJSON())
            ])})
        }
        catch(error)
        {
            console.log(error)
        }
    })
    
    socket.on("endRound", (data) => {
        try
        {
            const room = Rooms.FindRoomByUser(data.id)
            if(!room)
            {
                webserver.to(socket.id).emit("error", "Not exist")
                return
            }
            if(room.Asker.unicid != data.id)
            {
                webserver.to(socket.id).emit("error", "No you idiot")
                return
            }
            const op = room.EndRound(data.winid)
            if(!op)
            {
                webserver.to(socket.id).emit("NotPossibleUser","Die")
                return
            }
            room.users.forEach((user) => {
                webserver.to(user.socketid).emit('whoWon', {user: user.toJSON(), winner: room.Asker.toJSON(), lastwinner: room.LastAsker.name})
            });
        }
        catch(error)
        {
            console.log(error)
        }
    })

    socket.on("receiveAnswer",(data) => {
        try
        {
            const room = Rooms.FindRoomByUser(data.id)
            if(!room)
            {
                webserver.to(socket.id).emit("error", "Not exist")
                return
            }
            room.ReceiveAnswer(data.id,data.indexcards)
            const user = room.FindUser(data.id)
            console.log("User : " + socket.id + " replyed")
            webserver.to(socket.id).emit('receivedAnswer', {user : user.toJSON()})
        }
        catch(error)
        {
            console.log(error)
        }
    })

    socket.on("endGame", (data) => {
        const room = Rooms.FindRoomByUser(data.id)
        if(!room)
        {
            webserver.to(socket.id).emit("error", "Not exist")
            return
        }
        if(room.admin.unicid != data.id)
        {
            webserver.to(socket.id).emit("error", "No you idiot")
            return
        }
        const result = room.ResultGame()
        webserver.to(room.id).emit('gameEnded', {result : result.map((u) => u.toJSON())})
        Rooms.Destroy(room.id)
        console.log("Room : " + room.id + " destroyed")
    })

    socket.on("reconnect",(data) => {
        try
        {
            const room = Rooms.FindRoomByUser(data.id)
            if(room)
            {
                const user = room.FindSocket(data.oldid)
                user.socketid = socket.id
                socket.join(room.id)
                webserver.to(room.id).emit('playerReconnected')
                webserver.to(socket.id).emit('reconnected', {user : user.toJSON(), roomId : room.id})
                console.log("User : " + socket.id + " reconnected")
            }
            else
            {
                console.log("DIO")
                webserver.to(socket.id).emit('reload')
            }
        }
        catch(error)
        {
            console.log(error)
        }
    })

    socket.on("heartbeat", () => {
        const room = Rooms.FindRoomBySocket(socket.id)
        if(room)
        {
            const user = room.FindSocket(socket.id)
            if(user)
            {
                user.heartbeat = Date.now()
            }
        }
        socket.emit("heartbeat_ack");
    });

    socket.on("disconnect",() => {
        try
        {
            const room = Rooms.FindRoomBySocket(socket.id)
            if(room) 
            {
                webserver.to(room.id).emit('playerDisconnected')
            }
        }
        catch(err)
        {
            console.log(err)
        }
    })

    socket.on("destroyed",(data) => {
        try
        {
            console.log("User : " + data.id + " disconnected")
            webserver.to(data.id).emit('reload')
            const room = Rooms.FindRoomByUser(data.id)
            if(room) 
            {
                if (room.Asker.unicid == data.id || room.admin.unicid == data.id) 
                {
                    webserver.to(room.id).emit('roomClosed')
                    Rooms.Destroy(room.id)
                    console.log("Room : " + room.id + " destroyed")
                    return
                }
                webserver.to(room.id).emit('playerLeft',room.users.length-1)
                room.DestroyUser(data.id);
            }
        }
        catch(error)
        {
            console.log(error)
        }
    })

})

setInterval(() => {
    const now = Date.now();
    Rooms.rooms.forEach(room => {
        room.users.forEach(user => {
            if (now - user.heartbeat > 20000) 
            {
                try
                {
                    console.log("User : " + user.unicid + " disconnected")
                    if(room) 
                    {
                        if (room.Asker.unicid == user.unicid || room.admin.unicid == user.unicid) 
                        {
                            webserver.to(room.id).emit('roomClosed')
                            Rooms.Destroy(room.id)
                            console.log("Room : " + room.id + " destroyed")
                            return
                        }
                        webserver.to(room.id).emit('playerLeft',room.users.length-1)
                        room.DestroyUser(user.unicid);
                    }
                }
                catch(error)
                {
                    console.log(error)
                }
            }
        })
    })
},2000)

server.listen(port, () => {
    console.log("Server : http://localhost:" + port)
})