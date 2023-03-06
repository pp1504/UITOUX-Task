const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
require('dotenv/config');
const path = require('path');


const app = express();
const productRoutes = require("./routes/product");
const brandRoutes = require("./routes/brand");


const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI ;

app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/brands' , brandRoutes);

app.use('/products', productRoutes);

mongoose.connect(MONGODB_URI).then((result)=>{
    console.log("Database Connected");
    app.listen(PORT);
})
.catch((err)=>{
    console.log(err);
});
