const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://jossanbrothers:jossansaab99@cluster0.g9acqug.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = ()=> {
    mongoose.connect(mongoURI,()=>{

        console.log("Connected to MongoDb")
    })
}

module.exports = connectToMongo;
