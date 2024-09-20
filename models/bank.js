const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    amount: Number,
    user: String,
    createdAt: Number,
    bank : {
        type : Number,
        default : 0
    }
})

module.exports = mongoose.model("baccounts", schema)