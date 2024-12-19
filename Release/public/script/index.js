/*App StartUp*/
const colors = ["#fff5b3","#d6ebfe","#fed6e2"]
const logoCount = 7
let roomCode = ""
let user = new User("default",User.RandomId(32))
const imgUserPath = (n) => {
    const est = n < 26 ? ".jpg" : ".png"
    return "./img/userimg/" + n + est
}
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
    const revColor = (() => {
        while(true)
        {
            const temp = colors[Math.floor(Math.random() * (colors.length))]
            if(temp != color && temp != contColor)
            {
                return temp
            }
        }
    })()
    document.documentElement.style.setProperty("--backColor",contColor)
    document.documentElement.style.setProperty("--color",color)
    document.documentElement.style.setProperty("--revcolor",revColor)
    document.getElementById("logo").src = logoPath
})()

Server.on("connected",(data)=>{
    console.log("User : " + data)
    setTimeout(()=>{
        document.getElementById("load").style.display = "none"
        document.getElementById("home").style.display = "flex"
    },1500)

    let check = false
    let time = 0
    const internet = setInterval(()=>{
        if(navigator.onLine)
        {
            if(check)
            {
                clearInterval(internet)
                window.location.reload()
                time = 15000
            }
            setTimeout(()=>{
                document.getElementById("offline").style.display = "none"
            },time)
        }
        else
        {
            document.getElementById("offline").style.display = "flex"
            check = true
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
                document.getElementById("chooseName").removeEventListener("click",temp)
                Server.emit("createRoom",{name : document.getElementById("inputname").value.toString()})
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
            if(document.getElementById("inputroomcode").value != "" && document.getElementById("inputroomcode").value.length >= 6)
            {
                document.getElementById("askroomcode").style.display = "none"
                document.getElementById("askname").style.display = "flex"
                document.getElementById("inputname").value = localStorage.getItem("lastName") || ""
                const temp = ()=>{
                    if(document.getElementById("inputname").value != "")
                    {
                        localStorage.setItem("lastName",document.getElementById("inputname").value)
                        document.getElementById("chooseName").removeEventListener("click",temp)
                        Server.emit("joinRoom",{name : document.getElementById("inputname").value.toString(), roomId : document.getElementById("inputroomcode").value.toString().toUpperCase()})
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
                alert("Almost all of whom were slaughtered by your hand... Sixhundred (more likely 20) strike 👊")
            }
        }
        document.getElementById("chooseRoomCode").addEventListener("click", tempora)
    })
    
    /*AskName*/
    document.getElementById("randomName").addEventListener("click",()=>{
        document.getElementById("inputname").value = getRandomNamea()
    })

    /*StartRound*/
    document.getElementById("startRoom").addEventListener("click",()=>{
        Server.emit("startRound")
        document.getElementById("startRoom").disabled = true
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
        document.getElementById("waittostart").style.justifyContent = "center"
        document.getElementById("askname").style.display = "none"
        document.getElementById("roomlobby").style.display = "flex"
        document.getElementById("waittostart").style.display = "flex"
    })

    Server.on("questionRe",(data)=>{
        document.getElementById("waittostart").style.display = "none"
        document.getElementById("startRoom").disabled = false
        document.getElementById("userimg").src = imgUserPath(user.img)
        document.getElementById("username").innerText = user.name
        document.getElementById("usert").style.display = "flex"
        if(user.IsAsking)
        {
            const card = Card.FromJSON(data.question)
            console.log(card,data)
            document.getElementById("cardcontainer").appendChild(card.toHTML("♥ Question",true))
            document.getElementById("askerview").style.display = "flex"
        }
        else 
        {
            const card = Card.FromJSON(data.question)
            document.getElementById("questioncontainer").appendChild(card.toHTML("♥ Question",true))
            user.cards.cards.forEach(ele => {
                document.getElementById("cardscon").appendChild(ele.toHTML("✦ Answer",true,true))
            })
            document.getElementById("notaskerview").style.display = "flex"
        }
    })

    Server.on("alreadyRound",()=>{
        alert("Wait for the current round of the room to finish... Silly✨")
        document.getElementById("askname").style.display = "none"
        document.getElementById("home").style.display = "flex"
    })

    Server.on("downUsers",()=>{
        alert("Wait for some others... Silly✨")
        document.getElementById("startRoom").disabled = false
    })

    Server.on("roomNotExist",() => {
        alert("This Room does not exist... Silly✨")
        document.getElementById("askname").style.display = "none"
        document.getElementById("home").style.display = "flex"
    })
})