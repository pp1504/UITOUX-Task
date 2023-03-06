const mongoose = require('mongoose');
const {v4 : uuidv4} = require('uuid');

const Schema = mongoose.Schema;


const brandSchema = new Schema({
    brandName:{
        type : String,
        required : true,
    },
    brandImage : {
        type : String,
        required : true,
    }

});

module.exports = mongoose.model('Brand',brandSchema)
