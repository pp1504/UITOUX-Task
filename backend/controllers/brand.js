const Brand = require("../model/brand");


exports.postBrand = (req,res,next)=> {
   const brandName = req.body.brandName;
   const brandImage = req.body.brandImage;

   const brand = new Brand({
        brandName : brandName,
        brandImage : brandImage,
   });

   brand.save()
   .then((result)=>{
    console.log("Brand Created Suceesfully");
    res.json(result);
   })
   .catch((err)=>{
    console.log(err)
   });
}



exports.getBrand = (req,res,next) => {
    Brand.find()
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
    })
}


exports.insertManyBrand = (req,res,next) => {
    const brandData = req.body;
    const brand = new Brand();
 
    brand.collection.insertMany(brandData)
    .then((result)=>{
     console.log("Brand Created Suceesfully");
     res.json(result);
    })
    .catch((err)=>{
     console.log(err)
    });
}