const mongoose = require("mongoose")

// create schema
const ContactSchema = mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    message : {
        type : String
    }
});

const collection = new mongoose.model("contact", ContactSchema);
module.exports = collection;