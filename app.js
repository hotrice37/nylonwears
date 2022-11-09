//module import
const express=require("express");
const app=express();
app.use(express.json());

//route import
const product=require("./routes/r_product");

app.use("/product",product);

module.exports=app;