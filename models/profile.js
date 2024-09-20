const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    HalaJenea: String,
    jailTimes : String,
    job : String,
    Sawabek : String,
    fhess : Number,
    user : String
})

module.exports = mongoose.model("profile", schema)