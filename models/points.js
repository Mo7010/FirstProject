const mongoose = require('mongoose');
let Number1 = {
    type : Number,
    default : 0
}
let schema = new mongoose.Schema({
    user: String,
    ticket : Number1,
    game : Number1,
    join : Number1,
    tafeel : Number1,
    plus : Number1,
    gms : Number1
})

module.exports = mongoose.model("points",schema)