const express = require('express')
const app = express()
app.set("view engine" , "jsx");

app.engine("jsx", require("express-react-views").createEngine());

const pokemonObj = require('./models/pokemon')




app.get('/', (req, res)=>{
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res)=>{
    res.render('Index', {pokemon:pokemonObj})
})

app.get('/pokemon/:id', (req, res)=>{
    res.send(req.params.id);
})


app.listen(3000, function(){
    console.log("listen on port 3000")
})
