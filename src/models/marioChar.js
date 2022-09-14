const mongoose = require('mongoose');

//  Your code goes here
const marioChar= new mongoose.Schema({
    name:{type: String ,required:true},
    weight:{type: Number,required:true}
},{timestamps:true})

const marioModel=mongoose.model('mario',marioChar)
module.exports = marioModel;