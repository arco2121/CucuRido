const {Deck} = require("./Deck")

const Alpha = "QWERTYUIOPASDFGHJKLZXCVBNM1256789qwertypaufghjklzcvbnm*/&%$!"

class User
{
    constructor(name,socketid,pfp)
    {
        this.name = name
        this.unicid = User.RandomId(32)
        this.socketid = socketid
        this.point = 0
        this.img = pfp
        this.cards = new Deck()
        this.IsAsking = false
        this.admin = false
        this.heartbeat = Date.now()
    }

    Is()
    {
        return this.admin 
    }

    toJSON() 
    {
        return {
            name: this.name,
            unicid: this.unicid,
            point: this.point,
            cards: this.cards.toJSON(),
            IsAsking: this.IsAsking,
            admin: this.admin,
            img : this.img,
            socketid : this.socketid,
            heartbeat : this.heartbeat
        }
    }

    static RandomId(len)
    {
        let temp = ""
        let prev = ""
        for(let i = 0; i<len+1;i++)
        {
            let letter = Alpha[Math.floor(Math.random() * Alpha.length)]
            while(letter == prev)
            {
                letter = Alpha[Math.floor(Math.random() * Alpha.length)]
            }
            temp += letter
            prev = letter
        }
        return temp
    }

    static fromJSON(data) 
    {
        if(data.admin == true)
        {
            const user = new Admin(data.name,data.socketid,data.img);
            user.unicid = data.unicid;
            user.point = data.point;
            user.cards = Deck.fromJSON(data.cards.cards)
            user.IsAsking = data.IsAsking;
            user.admin = data.admin;
            user.img = data.img
            user.heartbeat = data.heartbeat
            return user;
        }
        const user = new Guest(data.name,data.socketid,data.img);
        user.unicid = data.unicid;
        user.point = data.point;
        user.cards = Deck.fromJSON(data.cards.cards)
        user.IsAsking = data.IsAsking;
        user.admin = data.admin;
        user.img = data.img
        user.heartbeat = data.heartbeat
        return user;
    }
}
class Admin extends User
{
    constructor(name,soc,pfp)
    {
        super(name,soc,pfp)
        this.IsAsking = true
        this.admin = true
    }
}
class Guest extends User
{
    constructor(name,soc,pfp)
    {
        super(name,soc,pfp)
    }
}

module.exports = {Guest, Admin, User}