const express = require('express')
const app = express()
const PORT = 4000


app.listen(PORT, () => {
    console.log('listening on port ${PORT}')
})

app.set('view engine', "html");

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/ab', (req, res) => {
    res.send("2 pages")
})

module.exports = app