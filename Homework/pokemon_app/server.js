const express = require('express')
const app = express()




app.get('/', (req, res)=>{
    res.send('Welcome to the Pokemon App!')
})



app.listen(3000, function(){
    console.log("listen on port 3000")
})
