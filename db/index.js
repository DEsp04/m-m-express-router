//implement mongoose
const mongoose = require('mongoose');
require("dotenv").config();

//we will be working with a certain database
//use mongoose to establish a connection with mongodb
let MONGODB_URI = process.env.PROD_MONGODB || process.env.MONGODB_URI || process.env.DB_Cluster_Password;



//we will call upon mongoose and use the connect method to connect to the mongodb
mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
  console.log('Successfully connected to MongoDB')
}).catch(e => {
  console.error('Connection error', e.message)
})


const db = mongoose.connection
module.exports = db


//with mongodb we dont need a schema, however, we need a structure using mongoose

//do npm init
//npm install mongoose


