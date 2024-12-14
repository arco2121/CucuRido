const express = require('express')
const cors = require("cors")
const server = express()
const port = process.env.PORT || 3000
const { RoomPool } = require('./Room')
const Rooms = new RoomPool()

server.use(express.json())
server.use(cors())
server.get('/', (req, res) => {
    res.send('CucuRidu 1.0.0\n')
})

/*To User*/
server.get('/rooms/create/:adminName', (req, res) => {
    const {adminName} = req.params
    const room = Rooms.Create(adminName)
    res.json(room.toJSON())
})

server.get('/rooms/add/:name/:idroom', (req, res) => {
    const {idroom , name} = req.params
    const room = Rooms.FindRoom(idroom)
    if (!room) 
    {
        return res.status(404).json({ error: 'Stanza non trovata.' });
    }
    const user = room.Add(name)
    res.json({user : user,room : room})
})

server.get('/users/:id/:idroom', (req, res) => {
    const {id,idroom} = req.params
    const room = Rooms.FindRoom(idroom)
    if (!room) 
    {
        return res.status(404).json({ error: 'Stanza non trovata.' });
    }
    const user = room.GetUser(id)
    res.json(user)
})

server.listen(port, () => {
    console.log("Server : http://localhost:" + port)
})