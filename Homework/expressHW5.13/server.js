
const express = require('express')

const app = express()

const name = "Yomi"



//

app.get('/greeting/:name', (req, res)=>{
    res.send('Hey now ' + req.params.name)
})


app.listen(3000, function(){
    console.log("listen on port 3000")
})
