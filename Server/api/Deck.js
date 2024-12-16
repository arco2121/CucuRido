class Card
{
    constructor(value,index,space)
    {
        this.value = value
        this.index = index
        this.space = space
    }

    toJSON()
    {
      return {
        value : this.value,
        index : this.index,
        space : this.space
      }
    }

    static FromJSON(json)
    {
        return new Card(json.value,json.index,json.space) || null 
    }
}
class Deck
{
    constructor(arr)
    {
        this.cards = arr || []
    }
    
    Shuffle()
    {
        this.cards.sort(() => Math.random() - 0.5)
        this.cards.forEach((e,i) => {
            this.cards[i].index = i
        })
    }

    Pick(nCards)
    {
        if(this.cards.length <= 0)
        {
            return null
        }
        let toReturn = []
        let n = 0
        while(n < nCards)
        {
            toReturn.push(this.cards.pop())
            n++
        }
        
        return toReturn
    }

    PickCard(index)
    {
        if(this.cards.length <= 0)
        {
            return null
        }
        let t = []
        for(let i = 0; i<index.length; i++)
        {
            t.push(this.cards[index[i]])
            this.cards[index[i]] = null
        }
        let tem = []
        let id = 0
        this.cards.forEach(value => {
            if(value != null)
            {
                tem.push(new Card(value.value,id,value.space))
                id++
            }
        })
        this.cards = tem
        return t
    }

    Empty()
    {
        return this.cards.length <= 0
    }

    Insert(cards) 
    {
        let i = this.cards.length - 1
        let temp = []
        cards.forEach(value => {
            if(value != null)
            {
                temp.push(new Card(value.value,i,value.space))
                i++
            }
        })
        this.cards = this.cards.concat(temp)
        this.Shuffle()
    }

    toJSON()
    {
        return {
            cards : this.cards.map(card => card.toJSON())
        }
    }

    static fromJSON(data)
    {
        return new Deck(data.map(card => Card.FromJSON(card))) || null
    }
}

module.exports = { Deck, Card};