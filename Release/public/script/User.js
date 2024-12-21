const Alpha = "QWERTYUIOPASDFGHJKLZXCVBNM1256789qwertypaufghjklzcvbnm*/&%$!"

class User
{
    constructor(name, unicid)
    {
        this.name = name
        this.unicid = unicid
        this.point = 0
        this.img = Math.floor(Math.random() * (38-1) + 1)
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

    toHTML()
    {
        const userCart = document.createElement('div')
        userCart.classList.add('usercart')
        const part1 = document.createElement('div')
        part1.classList.add('part');
        const h5Part1 = document.createElement('h5')
        h5Part1.textContent = '✦ Utente';
        part1.appendChild(h5Part1);
        userCart.appendChild(part1)
        const part2 = document.createElement('div')
        part2.classList.add('part', 'ori', 'klg');
        const h5Funk1 = document.createElement('h5')
        h5Funk1.classList.add('funk');
        h5Funk1.textContent = this.name
        const h5Funk2 = document.createElement('h5')
        h5Funk2.classList.add('funk');
        h5Funk2.textContent = this.point;
        part2.appendChild(h5Funk1);
        part2.appendChild(h5Funk2);
        userCart.appendChild(part2)
        return userCart
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
        user.cards = Deck.fromJSON(data.cards.cards)
        user.IsAsking = data.IsAsking;
        user.admin = data.admin;
        user.img = data.img
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