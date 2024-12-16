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
            console.log("ahgoio dzrtgòua")
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
        document.getElementById("roomidview").innerText = "Room Code :\n" + roomCode
        document.getElementById("waittostart").style.display = "flex"
        document.getElementById("askname").style.display = "none"
        document.getElementById("roomlobby").style.display = "flex"
        document.getElementById("waittostart").style.display = "flex"
    })
})