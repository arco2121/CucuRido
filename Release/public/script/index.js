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
    },1500)

    const internet = setInterval(()=>{
        if(navigator.onLine)
        {
            document.getElementById("offline").style.display = "none"
        }
        else
        {
            document.getElementById("offline").style.display = "flex"
        }
    },100);
    
    /*Homepage*/
    (() => {
        let Playing = true
        document.getElementById("logo").addEventListener("click",()=>{
            if(Playing)
            {
                document.getElementById("music").play()
                Playing = false
            }
            else
            {
                document.getElementById("music").pause()
                Playing = true
            }
        })
        document.addEventListener('visibilitychange',()=>{
            if (document.hidden) 
            {
                document.getElementById("music").pause()
            }
            else
            {
                if(!Playing)
                {
                    document.getElementById("music").play()
                }
            }
        })
    })()

    document.getElementById("createRoom").addEventListener("click",()=>{
        document.getElementById("home").style.display = "none"
        document.getElementById("askname").style.display = "flex"
        document.getElementById("inputname").value = localStorage.getItem("lastName") || ""
        const temp = ()=>{
            if(document.getElementById("inputname").value != "")
            {
                localStorage.setItem("lastName",document.getElementById("inputname").value)
                Server.emit("createRoom",{name : document.getElementById("inputname").value.toString()})
                document.getElementById("chooseName").removeEventListener("click",temp)
            }
            else
            {
                alert("Say something... I can't... Then you have forced my hands...Eurilicus...")
            }
        }
        document.getElementById("chooseName").addEventListener("click", temp)
    })

    document.getElementById("joinRoom").addEventListener("click",()=>{
        document.getElementById("home").style.display = "none"
        document.getElementById("askroomcode").style.display = "flex";
        const tempora = ()=>{
            if(document.getElementById("inputroomcode").value != "" && document.getElementById("inputroomcode").value.length >= 20)
            {
                document.getElementById("askroomcode").style.display = "none"
                document.getElementById("askname").style.display = "flex"
                document.getElementById("inputname").value = localStorage.getItem("lastName") || ""
                const temp = ()=>{
                    if(document.getElementById("inputname").value != "")
                    {
                        localStorage.setItem("lastName",document.getElementById("inputname").value)
                        Server.emit("joinRoom",{name : document.getElementById("inputname").value.toString(), roomId : document.getElementById("inputroomcode").value.toString().toUpperCase()})
                        document.getElementById("chooseName").removeEventListener("click",temp)
                    }
                    else
                    {
                        alert("Say something... I can't... Then you have forced my hands...Eurilicus... 🪓")
                    }
                }
                document.getElementById("chooseName").addEventListener("click",temp)
                document.getElementById("chooseRoomCode").removeEventListener("click",tempora)
            }
            else
            {
                alert("Almost all of whom were slaughtered by your hand... Sixteen strike 👊")
            }
        }
        document.getElementById("chooseRoomCode").addEventListener("click", tempora)
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
        alert("This Room does not exist, Silly✨")
        document.getElementById("askname").style.display = "none"
        document.getElementById("home").style.display = "flex"
    })
})