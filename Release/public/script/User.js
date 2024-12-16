const Alpha = "QWERTYUIOPASDFGHJKLZXCVBNM1256789qwertypaufghjklzcvbnm*/&%$!"

class User
{
    constructor(name, unicid)
    {
        this.name = name
        this.unicid = unicid
        this.point = 0
        this.img = Math.floor(Math.random() * (33-1) + 1)
        this.cards = new Deck()
        this.IsAsking = false
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
            IsAsking: this.IsAsking,
            admin: this.admin,
            img : this.img
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
        const user = new User(data.name, data.unicid);
        user.point = data.point;
        user.cards = Deck.fromJSON(data.cards)
        user.IsAsking = data.IsAsking;
        user.admin = data.admin;
        user.img = img
        return user;
    }
}
class Admin extends User
{
    constructor(name,unicid)
    {
        super(name,unicid)
        this.IsAsking = true
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