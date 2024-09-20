const mongoose = require('mongoose');



const Vote = new mongoose.Schema({
    serverID : {type : String , required : true},
    m : {type : Array , default : []},
    p : {type : Array , default : []},
    t : {type : Array , default : []},
})

module.exports = mongoose.model('vote' , Vote)