const Alpha = "QWERTYUIOPASDFGHJKLZXCVBNM1256789qwertypaufghjklzcvbnm*/&%$!"
const AdminKeyW = "x0io43sd"

class User
{
    constructor(name)
    {
        this.name = name
        this.unicid = User.RandomId(32)
        this.point = 0
        this.cards = []
        this.IsAskig = false
    }

    static async RandomId(len)
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
}

class Admin extends User
{
    constructor(name)
    {
        super(name)
        this.unicid += AdminKeyW
    }

    static async Is(unicid)
    {
        return unicid.includes(AdminKeyW)
    }
}

class Guest extends User
{
    constructor(name)
    {
        super(name)
    }
}

module.exports = { User, Admin, Guest }