//------------Greeting--------------
const { application } = require('express')
const express = require('express')
const app = express()



// responses = [
//     "It is certain", 
//     "It is decidedly so", 
//     "Without a doubt", "Yes definitely",
//     "You may rely on it", "As I see it yes", 
//     "Most likely", 
//     "Outlook good",
//     "Yes", 
//     "Signs point to yes", 
//     "Reply hazy try again", 
//     "Ask again later",
//     "Better not tell you now", 
//     "Cannot predict now", 
//     "Concentrate and ask again",
//     "Don't count on it", 
//     "My reply is no", 
//     "My sources say no",
//     "Outlook not so good", 
//     "Very doubtful"
// ]

// let Ballresponse = responses[Math.floor(Math.random() * responses.length)]

// const name = "Yomi"

// app.get('/greeting/:name', (req, res)=>{
//     res.send('Hey now ' + req.params.name)
// })
//-----------------Tip Calculator---------------------
// app.get('/tip/:total/:tipPercentage', (req, res)=>{
//     let total = Number(req.params.total)
//     let tipPercentage =Number(req.params.tipPercentage);
//     let tip = total * (tipPercentage/100) 
//     tip = String(tip)
//     res.send(tip)
// })

//------------------Magic 8 Ball--------------------
// app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req, res)=>{
//     if(responses[req.params.Ballresponse]){

//         res.send('<h1>Will I become a millionaire </h1>' +  req.params.Ballresponse)
//     };

// })


///----------------------Take One Down Pass It Around---------------

const bottlesOfBeer = () => function range(start, end){
    for (let n = start; n => end; n--){
        // yield n;
    }
    for (n of range(99,0)){
    app.get('/:number_of_bottles', (req, res)=>{
    res.send(req.params.bottlesOfBeer + 'Bottles of beer on the wall')
})
}}

//-------does not work, need assistance, will come back 

app.listen(3000, function(){
    console.log("listen on port 3000")
})
