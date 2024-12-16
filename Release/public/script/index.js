/*App StartUp*/
const colors = ["#fff5b3","#d6ebfe","#fed6e2"]
const logoCount = 7
let roomCode = ""
let user = new User("default",User.RandomId(32))
const Server = io("https://cucu-ridu.onrender.com");
(() => {
    const color = colors[Math.floor(Math.random() * (colors.length))]
    const logoPath = "./img/logoimg/" + Math.floor(Math.random() * (logoCount - 1) + 1) + ".png"
    const contColor = (() => {
        while(true)
        {
            const temp = colors[Math.floor(Math.random() * (colors.length))]
            if(temp != color)
            {
                return temp
            }
        }
    })()
    document.documentElement.style.setProperty("--backColor",contColor)
    document.documentElement.style.setProperty("--color",color)
    document.getElementById("logo").src = logoPath
})()

Server.on("connected",(data)=>{
    console.log("User : " + data)
    setTimeout(()=>{
        document.getElementById("load").style.display = "none"
        document.getElementById("home").style.display = "flex"
    },1000)

    setInterval(()=>{
        if(navigator.onLine)
        {
            document.getElementById("offline").style.display = "none"
        }
        else
        {
            document.getElementById("offline").style.display = "flex"
        }
    },100)
    
    /*Homepage*/
    document.getElementById("createRoom").addEventListener("click",()=>{
        document.getElementById("home").style.display = "none"
        document.getElementById("askname").style.display = "flex"
        document.getElementById("inputname").value = localStorage.getItem("lastName") || ""
        document.getElementById("chooseName").addEventListener("click", ()=>{
            localStorage.setItem("lastName",document.getElementById("inputname").value)
            Server.emit("createRoom",{name : document.getElementById("inputname").value.toString()})
        },{once : true})
    })

    document.getElementById("joinRoom").addEventListener("click",()=>{
        document.getElementById("home").style.display = "none"
        document.getElementById("askroomcode").style.display = "flex"
        document.getElementById("chooseRoomCode").addEventListener("click", ()=>{
            document.getElementById("askroomcode").style.display = "none"
            document.getElementById("askname").style.display = "flex"
            document.getElementById("inputname").value = localStorage.getItem("lastName") || ""
            document.getElementById("chooseName").addEventListener("click", ()=>{
                localStorage.setItem("lastName",document.getElementById("inputname").value)
                Server.emit("joinRoom",{name : document.getElementById("inputname").value.toString(), roomId : document.getElementById("inputroomcode").value.toString().toUpperCase()})
            },{once : true})
        },{once : true})
    })
    
    /*AskName*/
    document.getElementById("randomName").addEventListener("click",()=>{
        document.getElementById("inputname").value = getRandomNamea()
    })
    
    /*Events*/
    Server.on("roomCreated",(data) => {
        roomCode = data.roomId
        user = User.fromJSON(data.user)
        document.getElementById("startRoom").style.display = "block"
        document.getElementById("roomidview").innerText = "Room Code\n\n" + roomCode
        document.getElementById("roomidview").addEventListener("click",()=>{
            navigator.clipboard.writeText(roomCode).then(()=>{
                alert("Copied to Clipboard")
            })
        })
        document.getElementById("waittostart").style.display = "flex"
        document.getElementById("waittostart").style.justifyContent = ""
        document.getElementById("askname").style.display = "none"
        document.getElementById("roomlobby").style.display = "flex"
        document.getElementById("waittostart").style.display = "flex"
    })
    
    Server.on("joinedRoom",(data) => {
        roomCode = data.roomId
        user = User.fromJSON(data.user)
        document.getElementById("startRoom").style.display = "none"
        document.getElementById("roomidview").innerText = "Room Code\n\n" + roomCode
        document.getElementById("roomidview").addEventListener("click",()=>{
            navigator.clipboard.writeText(roomCode).then(()=>{
                alert("Copied to Clipboard")
            })
        })
        document.getElementById("waittostart").style.display = "flex"
        document.getElementById("waittostart").style.justifyContent = "center"
        document.getElementById("askname").style.display = "none"
        document.getElementById("roomlobby").style.display = "flex"
        document.getElementById("waittostart").style.display = "flex"
    })

    Server.on("roomNotExist",() => {
        alert("This Room does not exist Silly✨")
        document.getElementById("askname").style.display = "none"
        document.getElementById("home").style.display = "flex"
    })
})