const mongoose = require('mongoose');
const {v4 : uuidv4} = require('uuid');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    productSKU: {
        type: String
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        required: true,
    },
    ratings: {
        type: Number,
        required: true,
    },
    reviews: {
        type: Number,
        required: true,
    },
    sellingPrice: {
        type: Number,
        required: true,
    },
    actualPrice: {
        type : Number
    },
    isHotProduct : {
        type : Boolean
    },
    isFeatured :{
        type : Boolean
    },
    isTopRated :{
        type : Boolean
    },
    isSpecialOffer :{
        type : Boolean
    },
    isBestSeller :{
        type : Boolean
    },

})

module.exports = mongoose.model('Product' , productSchema)