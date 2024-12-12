const Alpha = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890"

class RoomPool
{
    constructor()
    {
        this.rooms = []
    }

    Create(adminName)
    {
        while(true)
        {
            const room = new Room(adminName)
            if(this.Find(room) == -1)
            {
                this.rooms.push(room)
                return room
            }
        }
    }

    Find(room)
    {
        for(let i = 0; i<this.rooms.length;i++)
        {
            if(room.id == this.rooms[i].id)
            {
                return i
            }
        }
        return -1
    }
}

class Room
{
    constructor(adminName)
    {
        this.id = Room.RandomId()
        this.admin = new Admin(adminName)
        this.users = [this.admin]
        this.Questions = new Deck(QuestionsArr)
        this.Answer = Deck(AnswerArr)
        this.RoundNumber = 0
        this.LastWon = 0;     
        this.CurrentRound = {
            received : 0,
            question: null,
            answers: [],
            isRound : false,
            master : 0
        }
    }

    async getId(unicid)
    {
        if(this.users.find(value => value.unicid == unicid) && Admin.Is(unicid))
        {
            return this.id
        }
        return null
    }

    async Add(name)
    {
        const user = new Guest(name)
        this.rooms.push(user)
        return user
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

    async Round()
    {
        let RecivedAnswers = 0;


        if(this.RoundNumber == 0)
        {
            this.CurrentRound.master = 0
        }
        else
        {
            this.CurrentRound.master = this.LastWon
        }

        this.users[this.CurrentRound.master].IsAskig = true

        this.CurrentRound.question = this.Questions.Pick(1)
        if(this.CurrentRound.question == null)
        {
            // sono finite le carte :<
        }


    }
}

/*

    Stanza
    
    public Giocatori[] = { ... };

    public Admin = Giocatori[0]

    int CurrentMaster = 0; 

    if(RoundNumber == 0){
        CurrentMaster = 0; // Giocatore nella cella 0 dell'array
    }
    else{
        CurrentMaster = LastWhoWon;
    }

    Giocatori[CurrentMaster].IsAskingQuestion = true;

    [["string", n]] CurrentDomanda = MazzoDomande.DammmiCarte(1);

*/