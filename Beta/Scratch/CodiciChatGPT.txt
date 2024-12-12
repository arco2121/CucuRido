// Room
const Alpha = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890";

class RoomPool {
    constructor() {
        this.rooms = [];
    }

    Create(adminName) {
        while (true) {
            const room = new Room(adminName);
            if (this.Find(room.id) === -1) {
                this.rooms.push(room);
                return room;
            }
        }
    }

    Find(roomId) {
        return this.rooms.findIndex(room => room.id === roomId);
    }
}

class Room {
    constructor(adminName) {
        this.id = Room.RandomId(6); // Genera un ID unico di 6 caratteri
        this.admin = new Admin(adminName);
        this.users = [this.admin];
        this.Questions = new Deck(QuestionsArr);
        this.Answer = new Deck(AnswerArr);
        this.RoundNumber = 0;
        this.LastWon = null;
        this.CurrentRound = {
            received: 0,
            question: null,
            answers: [],
            isRound: false,
            master: 0
        };
    }

    static RandomId(length = 6) {
        return Array.from({ length }, () => Alpha.charAt(Math.floor(Math.random() * Alpha.length))).join('');
    }

    Add(name) {
        const user = new Guest(name);
        this.users.push(user); // Corretto: aggiunge il nuovo utente all'elenco
        return user;
    }

    StartRound() {
        if (this.RoundNumber === 0) {
            this.CurrentRound.master = 0; // Il primo master è l'admin
        } else {
            this.CurrentRound.master = this.LastWon || 0; // Master è l'ultimo vincitore
        }

        const master = this.users[this.CurrentRound.master];
        master.IsAsking = true;

        this.CurrentRound.question = this.Questions.Pick(1);
        if (!this.CurrentRound.question) {
            throw new Error("Non ci sono più domande!");
        }
    }

    ReceiveAnswer(userId, answer) {
        this.CurrentRound.answers.push({ userId, answer });
        this.CurrentRound.received++;
    }
}


// User
class User {
    constructor(name, isAdmin = false) {
        this.name = name;
        this.unicid = User.RandomId(32);
        this.points = 0;
        this.cards = [];
        this.IsAsking = false;
        this.isAdmin = isAdmin; // Distinzione tra Admin e Guest
    }

    static RandomId(length = 32) {
        const Alpha = "QWERTYUIOPASDFGHJKLZXCVBNM1256789qwertyuiopasdfghjklzxcvbnm";
        return Array.from({ length }, () => Alpha.charAt(Math.floor(Math.random() * Alpha.length))).join('');
    }
}
