// import mongoose in order to to connect to our database
const mongoose = require('mongoose')

// IMPORT DOTENV IN ORDER TO CONNET TO OUR DATABASE
const dotenv = require('dotenv');

// Use dotenb to connect to our config file
dotenv.config({
    path: "./config.env"
});

console.log(process.env)

// IMPORT OUR EXPRESS APPLICATION
const app = require("./app");

const perscholasDB = mongoose
.connect(process.env.DATABASE.replace("<password>", process.env.PASSWORD)).then(() =>{    
    
    console.log("database is up and running...")
});


// Create a variable that represent our port number
const port = 3000;

// Listen to the request/response cycle
app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});