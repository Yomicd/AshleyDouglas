const express = require('express')
const app = express()
const pokemonObj = require('./models/pokemon')




app.get('/', (req, res)=>{
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res)=>{
    res.send(pokemonObj)
})



app.listen(3000, function(){
    console.log("listen on port 3000")
})
