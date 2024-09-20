const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    reason: String,
    user : String
})

module.exports = mongoose.model("history", schema)