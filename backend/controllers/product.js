const Product = require("../model/product");


exports.postProduct = (req,res,next)=> {
    
    const {
        productSKU , 
        title , 
        description, 
        image, 
        ratings, 
        reviews, 
        sellingPrice, 
        actualPrice, 
        isHotProduct,
        isFeatured,
        isTopRated,
        isSpecialOffer,
        isBestSeller
    } = req.body;

   const product = new Product({
        productSKU , 
        title , 
        description, 
        image, 
        ratings, 
        reviews, 
        sellingPrice, 
        actualPrice, 
        isHotProduct,
        isFeatured,
        isTopRated,
        isSpecialOffer,
        isBestSeller
   });

   product.save()
   .then((result)=>{
    console.log("Product Created Suceesfully");
    res.json(result);
   })
   .catch((err)=>{
    console.log(err)
   });
}



exports.getProduct = (req,res,next) => {
    Product.find()
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
    })
}


exports.getProductById = (req,res,next) => {
    const id = req.params.id;
    Product.findById(id)
    .then((result)=>{
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
    })
};


exports.getProductByFeatured = (req,res,next) => {
    Product.find({isFeatured : req.params.featured})
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
    })
};

exports.getProductByTopRated = (req,res,next) => {
    Product.find({isTopRated : req.params.toprated})
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
    })
};

exports.getProductBySpecialOffer = (req,res,next) => {
    Product.find({isSpecialOffer : req.params.specialoffer})
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
    })
};


exports.getProductByBestSeller = (req,res,next) => {
    Product.find({isBestSeller : req.params.bestseller})
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
    })
};


exports.insertManyProduct = (req,res,next) => {
    const productData = req.body;
    const product = new Product();
 
    product.collection.insertMany(productData)
    .then((result)=>{
     console.log("Product Created Suceesfully");
     res.json(result);
    })
    .catch((err)=>{
     console.log(err)
    });
}