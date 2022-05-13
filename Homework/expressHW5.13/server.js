//------------Greeting--------------
const express = require('express')
const app = express()

// const name = "Yomi"

// app.get('/greeting/:name', (req, res)=>{
//     res.send('Hey now ' + req.params.name)
// })

app.get('/tip/:total/:tipPercentage', (req, res)=>{
    let total = Number(req.params.total)
    let tipPercentage =Number(req.params.tipPercentage);
    let tip = total * (tipPercentage/100) 
    tip = String(tip)
    res.send(tip)
})


app.listen(3000, function(){
    console.log("listen on port 3000")
})
