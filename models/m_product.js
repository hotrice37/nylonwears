const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
    prodname:{type:String, required:[true,"Enter Name"]},
    description:{type:String, required:[true,"Enter Description"]},
    quantity:{type:Number, required:[true,"Enter Quantity"]},
    price:{type:Number, required:[true,"Enter Price"]},
    category:{type:String, enum:["Men","Women"], required:[true,"Enter Category"]},
    //createdAt:{type: Date, default: Date.now,},
    image:[{public_id:{type:String, required:true},url:{type:String, required:true}}]
})

module.exports=mongoose.model("ProductModel",productSchema)