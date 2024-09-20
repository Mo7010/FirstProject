const mongoose = require('mongoose');

let s = new mongoose.Schema({
    user: String,
    reason: String
})
module.exports = mongoose.model("jail", s)