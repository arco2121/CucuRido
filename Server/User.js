const {Deck} = require("./Deck")

const Alpha = "QWERTYUIOPASDFGHJKLZXCVBNM1256789qwertypaufghjklzcvbnm*/&%$!"

class User
{
    constructor(name, unicid)
    {
        this.name = name
        this.unicid = unicid
        this.point = 0
        this.cards = new Deck()
        this.IsAskig = false
        this.admin = false
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
            IsAskig: this.IsAskig,
            admin: this.admin
        }
    }

    static RandomId(len)
    {
        let temp = ""
        let prev = ""
        for(let i = 0; i<len+1;i++)
        {
            let letter = Alpha[Math.floor((Math.random() + (Alpha.length-1)) - (Alpha.length-1))]
            while(letter == prev)
            {
                letter = Alpha[Math.floor((Math.random() + (Alpha.length-1)) - (Alpha.length-1))]
            }
            temp += letter
            prev = letter
        }
        return temp
    }

    static fromJSON(data) 
    {
        const user = new User(data.name, data.unicid);
        user.point = data.point;
        user.cards = Deck.fromJSON(data.cards)
        user.IsAskig = data.IsAskig;
        user.admin = data.admin;
        return user;
    }
}
class Admin extends User
{
    constructor(name,unicid)
    {
        super(name,unicid)
        this.admin = true
    }
}
class Guest extends User
{
    constructor(name,unicid)
    {
        super(name,unicid)
    }
}

module.exports = {Guest, Admin, User}