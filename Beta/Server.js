const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const { RoomPool } = require('./Room')
const Rooms = new RoomPool()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Americaya was Here')
})

app.post('/rooms/create/admin/:adminName', (req, res) => {
    const { adminName } = req.params
    const room = Rooms.Create(adminName)
    res.json(room)
})

app.get('/rooms/:id', (req, res) => {
    const { id } = req.params
    const room = Rooms.FindRoom(id)
    if (!room) 
    {
        return res.status(404).json({ error: 'Stanza non trovata.' });
    }
    res.json(room)
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})