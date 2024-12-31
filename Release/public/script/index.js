/*App StartUp*/
const colors = ["#FED6E2", "#FFD2C1", "#FFF5B3", "#E9FFC1", "#C1FFF0", "#D6EBFE", "#DEC1FF"]
const logoCount = 7
let roomCode = ""
let oldid = ""
let userPfp = 1
let GetAnsw
let skibidi
let backtime = 500
let quest
let esplodi
let alreadyconnected = false
let lastp = -1
let user
let heartbeatInterval;
let isServerAlive = true;
document.getElementById("inputname").value = getRandomNamea()
const imgUserPath = (n) => {
    return "./img/userimg/" + n + '.jpg'
}
const Server = io("https://cucu-ridu.onrender.com",{
    reconnection: true,
    reconnectionDelay: 10,
    reconnectionDelayMax: 12, 
});
const sendHeartbeat = () => {
    if (Server.connected) 
    {
        Server.emit("heartbeat");
    } 
    else 
    {
        isServerAlive = false;
    }
};
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
    if (!navigator.userAgent.includes("Chrome") && !navigator.userAgent.includes("Edg") && !navigator.userAgent.includes("Chromium"))
    {
        const rule = `
            :not(img):not(#userpop) {
                overflow: visible;
            }
            #roomlobby, #notaskerview {
                justify-content: flex-start;
            }
            @media (orientation: landscape) and (max-height: 600px) {
                .scroll {
                    max-height: auto;
                }
                #notaskerview {
                    align-items: flex-start;
                }
            }
            #userpop {
                justify-content: flex-start;
            }
            #conter
            {
                height: auto;
            }
        `;
        const style = document.createElement("style");
        style.innerHTML = rule;
        document.head.appendChild(style);
    }
})()

Server.on("connected",(data)=>{
    isServerAlive = true
    document.getElementById("offline").style.display = "none"
    heartbeatInterval = setInterval(sendHeartbeat, 2000);
    if(alreadyconnected)
    {
        Server.emit("reconnect",{id : user.unicid, oldid : localStorage.getItem("oldid")})
        localStorage.setItem("oldid",data)
        return
    }
    localStorage.setItem("oldid",data)
    alreadyconnected = true
    console.log("User : " + data)
    user = new User("name",data,0)
    setTimeout(()=>{
        document.getElementById("inputname").value = getRandomNamea()
        userPfp = getRandomPfp()
        document.getElementById("imguserk").src = imgUserPath(userPfp)
        document.getElementById("load").style.display = "none"
        document.getElementById("home").style.display = "flex"
    },500)  
});

Server.on("heartbeat_ack", () => {
    isServerAlive = true;
});



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
})();

document.getElementById("createRoom").addEventListener("click",()=>{
    document.getElementById("home").style.display = "none"
    document.getElementById("askname").style.display = "flex"
    document.getElementById("inputname").value = localStorage.getItem("lastName") || getRandomNamea()
    const temp = ()=>{
        if(document.getElementById("inputname").value != "")
        {
            localStorage.setItem("lastName",document.getElementById("inputname").value)
            document.getElementById("chooseName").removeEventListener("click",temp)
            Server.emit("createRoom",{name : document.getElementById("inputname").value.toString(), img : userPfp})
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
            document.getElementById("inputname").value = localStorage.getItem("lastName") || getRandomNamea()
            const temp = () => {
                if(document.getElementById("inputname").value != "")
                {
                    localStorage.setItem("lastName",document.getElementById("inputname").value)
                    document.getElementById("chooseName").removeEventListener("click",temp)
                    Server.emit("joinRoom",{name : document.getElementById("inputname").value.toString(), roomId : document.getElementById("inputroomcode").value.toString().toUpperCase(),img : userPfp})
                }
                else
                {
                    alert("Inserisci qualcosa scem* ❤️")
                }
            }
            document.getElementById("chooseName").addEventListener("click",temp)
            document.getElementById("chooseRoomCode").removeEventListener("click",tempora)
        }
        else
        {
            alert("Inserisci almeno 6 caratteri scem* 😞🫠")
        }
    }
    document.getElementById("chooseRoomCode").addEventListener("click", tempora)
})

/*AskName*/
document.getElementById("randomName").addEventListener("click",()=>{
    document.getElementById("inputname").value = getRandomNamea()
    userPfp = getRandomPfp(userPfp)
    document.getElementById("imguserk").src = imgUserPath(userPfp)
})

/*StartRound*/
document.getElementById("startRoom").addEventListener("click",()=>{
    Server.emit("startRound",{id : user.unicid})
    document.getElementById("startRoom").disabled = true
})

document.getElementById("restartRoom").addEventListener("click",() => {
    Server.emit("startRound",{id : user.unicid})
    document.getElementById("restartRoom").disabled = true
})

document.getElementById("tohome").addEventListener("click",() => {
    window.location.reload()
})

document.getElementById("closedroom").addEventListener("click",() => {
    window.location.reload()
})

document.getElementById("userimg").addEventListener("click",() => {
    Server.emit("infoRoom",{id : user.unicid})
})

document.querySelector(".over").addEventListener("click",()=>{
    document.querySelector(".over").style.display = "none"
    document.getElementById("userpop").style.display = "none"
})

/*Events*/
Server.on("roomCreated",(data) => {
    roomCode = data.roomId
    user = User.fromJSON(data.user)
    document.getElementById("startRoom").style.display = "flex"
    document.getElementById("roomidview").innerText = "Codice Stanza\n\n" + roomCode
    Server.emit("numberRoom",{id : user.unicid})
    esplodi = setInterval(()=>{
        Server.emit("numberRoom",{id : user.unicid})
    },500)
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
    document.getElementById("roomidview").innerText = "Codice Stanza\n\n" + roomCode
    Server.emit("numberRoom",{id : user.unicid})
    esplodi = setInterval(()=>{
        Server.emit("numberRoom",{id : user.unicid})
    },500)
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
    clearInterval(esplodi)
    document.getElementById("submitta").disabled = false
    document.getElementById("restartRoom").disabled = false
    document.getElementById("winround").style.display = "none"
    document.getElementById("waittostart").style.display = "none"
    document.getElementById("startRoom").disabled = false
    document.getElementById("userimg").src = imgUserPath(user.img)
    document.getElementById("username").innerText = user.name
    document.getElementById("usert").style.display = "flex"
    document.getElementById("pointsa").style.display = "flex"
    const card = Card.FromJSON(data.question)
    quest = card
    if(user.IsAsking)
    {
        while(document.getElementById("cardcontainer").firstChild)
        {
            document.getElementById("cardcontainer").removeChild(document.getElementById("cardcontainer").firstChild)
        }
        document.getElementById("cardcontainer").appendChild(card.toHTML("♥ Frase"))
        GetAnsw = setInterval(()=>{
            Server.emit("getAnswers",{id : user.unicid})
        },backtime)
        card.spacehtml.innerText = "0/0"
        skibidi = setInterval(()=>{
            Server.emit("answersRoom",{id : user.unicid})
        },500)
        Server.on("answersRoomed",(data) => {
            card.spacehtml.innerText = data.number + "/" + (data.room - 1)
        })
        document.getElementById("askerview").style.display = "flex"
    }
    else 
    {
        let answers = Array(card.space).fill(null)
        while(document.getElementById("questioncontainer").firstChild)
        {
            document.getElementById("questioncontainer").removeChild(document.getElementById("questioncontainer").firstChild)
        }
        document.getElementById("questioncontainer").appendChild(card.toHTML("♥ Frase",true))
        while(document.getElementById("cardscon").firstChild)
        {
            document.getElementById("cardscon").removeChild(document.getElementById("cardscon").firstChild)
        }
        user.cards.cards.forEach(ele => {
            const apt = ele.toHTML("✦ Risposta",null,true)
            document.getElementById("cardscon").appendChild(apt)
            const SelectedCards = (cardElement, card) => {
                const cardIndex = answers.indexOf(card.index);
                if (cardIndex != -1) 
                {
                    answers[cardIndex] = null
                    cardElement.classList.remove("selectd")
                    ele.spacehtml.innerText = 0
                } 
                else 
                {
                    const firstEmptyIndex = answers.indexOf(null);
                    if (firstEmptyIndex != -1) 
                    {
                        answers[firstEmptyIndex] = card.index;
                        cardElement.classList.add("selectd")
                        ele.spacehtml.innerText = firstEmptyIndex + 1
                    }
                }
            }
            apt.addEventListener("click",()=>{
                SelectedCards(apt,ele)
            })
        })
        const tem = () => {
            if(answers.includes(null))
            {
                alert("Completa la selezione delle risposte abort* ✨")
                return
            }
            Server.emit("receiveAnswer",{id : user.unicid,indexcards : answers})
            document.getElementById("replyCard").removeEventListener("click",tem)
        }
        document.getElementById("replyCard").addEventListener("click",tem)
        document.getElementById("notaskerview").style.display = "flex"
    }
})

Server.on("alreadyRound",()=>{
    alert("Attendi che il round attuale sia finito... Silly✨")
    document.getElementById("askname").style.display = "none"
    document.getElementById("home").style.display = "flex"
})

Server.on("downUsers",()=>{
    alert("Aspetta che entrino altre persone... Silly✨")
    document.getElementById("startRoom").disabled = false
    document.getElementById("submitta").disabled = false
    document.getElementById("restartRoom").disabled = false
})

Server.on("roomNotExist",() => {
    alert("Quest stanza non esiste... Silly✨")
    document.getElementById("askname").style.display = "none"
    document.getElementById("home").style.display = "flex"
})

Server.on("receivedAnswer",(data) => {
    user = User.fromJSON(data.user)
    document.getElementById("notaskerview").style.display = "none"
    document.getElementById("waitround").style.display = "flex"
})

Server.on("answersYet",()=>{
    backtime = Math.random() * (1001 - 500) + 500
})

Server.on("gettedAnswers",(data) => {
    clearInterval(GetAnsw)
    clearInterval(skibidi)
    let answers = data.answers.map((resu) => [
        User.fromJSON(resu[0]),
        resu[1].map((card) => Card.FromJSON(card))
    ])
    let j = 0
    while(document.getElementById("modcardcontainer").firstChild)
    {
        document.getElementById("modcardcontainer").removeChild(document.getElementById("modcardcontainer").firstChild)
    }
    document.getElementById("modcardcontainer").appendChild(quest.toHTML("♥ Frase",true))
    const BlankSpace = () => {
        document.getElementById("nquest").innerText = j+1 + "/" + answers.length
        document.getElementById("submitta").disabled = true
        for(let i = 0; i<answers[j][1].length;i++)
        {
            const y = quest.text.textContent
            let u = ""
            if(y.indexOf("_") == 0)
            {
                u = y.replace("_",answers[j][1][i].value)
            }
            else
            {
                u = y.replace("_",answers[j][1][i].value[0].toLowerCase() + answers[j][1][i].value.slice(1))
            }
            quest.text.innerText = u
        }
    }
    BlankSpace()
    document.getElementById("submitta").disabled = false
    document.getElementById("askerview").style.display = "none"
    document.getElementById("choosewinner").style.display = "flex"
    document.getElementById("ava").addEventListener("click",()=>{
        if(j+1 > answers.length - 1)
            return
        j++
        quest.text.innerText = quest.value
        BlankSpace()
        setTimeout(()=>{
            document.getElementById("submitta").disabled = false
        },200)
    })
    document.getElementById("indi").addEventListener("click",()=>{
        if(j-1 < 0)
            return
        j--
        quest.text.innerText = quest.value
        BlankSpace()
        setTimeout(()=>{
            document.getElementById("submitta").disabled = false
        },200)
    })
    document.getElementById("submitta").addEventListener("click", () => {
        document.getElementById("submitta").disabled = true
        Server.emit("endRound",{id : user.unicid, winid : answers[j][0].unicid})
    })
})

Server.on("whoWon",(data) => {
    if(user.IsAsking)
    {
        document.getElementById("choosewinner").style.display = "none"
        document.getElementById("winround").style.display = "flex"
    }
    else
    {
        document.getElementById("waitround").style.display = "none"
        document.getElementById("winround").style.display = "flex"
    }
    document.getElementById("imgwon").src = imgUserPath(data.winner.img)
    document.getElementById("whowon").innerText = data.winner.name + "\nha vinto il round"
    document.getElementById("whomess").innerText = data.lastwinner + "\nha decretato il vincitor* di questo round"
    user = User.fromJSON(data.user)
    if(user.IsAsking)
    {
        document.getElementById("restartRoom").style.display = "flex"
    }
    else
    {
        document.getElementById("restartRoom").style.display = "none"
    }
})

Server.on("gameEnded",(data) => {
    document.getElementById("waittostart").style.display = "none"
    document.getElementById("waitround").style.display = "none"
    document.getElementById("askerview").style.display = "none"
    document.getElementById("notaskerview").style.display = "none"
    document.getElementById("choosewinner").style.display = "none"
    document.getElementById("winround").style.display = "none"
    document.querySelector(".over").style.display = "none"
    document.getElementById("userpop").style.display = "none"
    let u = ""
    if(data.result.length == 1)
    {
        document.getElementById("dio").innerText = "Ha vinto :"
        u = User.fromJSON(data.result[0]).name 
    }
    else
    {
        document.getElementById("dio").innerText = "Hanno vinto :"
        console.log(data.result)
        for(let i = 0; i<data.result.length;i++)
        {
            if(i == data.length-1)
            {
                u += User.fromJSON(data.result[i]).name
            }
            u += User.fromJSON(data.result[i]).name + ", "
        } 
    }
    document.getElementById("esplosione").innerText = u
    document.getElementById("endgame").style.display = "flex"
})

Server.on("NotPossibleUser",()=>{
    alert("Non puoi nominare questo vincitore scem* ✨")
    document.getElementById("submitta").disabled = false
})

Server.on("numberRoomed",(data) => {
    document.getElementById("morirediocane").innerText = "Giocatori presenti : " + data.room
})

Server.on("infoRoomed",(data) => {
    document.getElementById("codeshare").innerText = "Codice Stanza\n" + data.room.id
    if(user.admin)
    {
        document.getElementById("chiu").addEventListener("click",()=>{
            document.querySelector(".over").style.display = "none"
            document.getElementById("userpop").style.display = "none"
            Server.emit("endGame",{id : user.unicid})
        })
    }
    else
    {
        document.getElementById("chiu").style.display = "none"
    }
    document.getElementById("delte").addEventListener("click",()=>{
        window.location.reload()
    })
    while(document.getElementById("conter").firstChild)
    {
        document.getElementById("conter").removeChild(document.getElementById("conter").firstChild)
    }
    data.room.users.sort((a,b) => b.point - a.point).forEach(usera => {
        const user = User.fromJSON(usera)
        document.getElementById("conter").appendChild(user.toHTML())
    })
    document.querySelector(".over").style.display = "flex"
    document.getElementById("userpop").style.display = "flex"
})

Server.on("roomClosed",() => {
    document.querySelector(".over").style.display = "none"
    document.getElementById("userpop").style.display = "none"
    document.getElementById("roomClosed").style.display = "flex"
})

Server.on("playerLeft",(len) => {
    if(len < 3)
    {
        window.location.reload()
    }
})

Server.on("reload",()=>{
    window.location.reload()
})

setInterval(()=>{
    if(user != undefined && user != null && lastp != user.point)
    {
        document.getElementById("pointsa").innerText = "Round Vinti : " + user.point
        lastp = user.point
    }
},100);

(() => {
    let con = 0, desc = 0, oki = false
    setInterval(()=>{
        if(con >= desc)
        {
            document.getElementById("waity").style.display = "none"
            if(oki)
            {
                con = 0
                desc = 0
                oki = false
            }
        }
        else
        {
            document.getElementById("waity").style.display = "flex"
            oki = true
        }
    },100)

    Server.on("playerReconnected",()=>{
        con++
    })

    Server.on("playerDisconnected",()=>{
        desc++
    })
})()

Server.on("reconnected",(data)=>{ 
    user = User.fromJSON(data.user)
    roomCode = data.roomId
    console.log("User : Reconnected")
})

Server.on("disconnect",() => {
    document.getElementById("offline").style.display = "flex"
    clearInterval(heartbeatInterval);
    isServerAlive = false;
});

(() => {
    let alr = true;
    const endSession = () => {
        if (alr) 
        {
            Server.emit("destroyed", { id: user.unicid });
            alr = false;
        }
    };
    window.addEventListener("unload", endSession);
    window.addEventListener("pagehide", (event) => {
        if (!event.persisted) {
            endSession();
        }
    });
    window.addEventListener("beforeunload", endSession);
})();