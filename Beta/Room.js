const Alpha = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890"

class RoomPool
{
    constructor()
    {
        this.rooms = []
    }

    Create()
    {
        while(true)
        {
            const room = new Room()
            if(this.Find(room) == -1)
            {
                this.rooms.push(room)
                return
            }
        }
    }

    Find()
    {
        
    }
}

class Room
{
    constructor()
    {
        this.id = Room.RandomId()
        this.users = []
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
}