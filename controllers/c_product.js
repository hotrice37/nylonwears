const Product=require("../models/m_product")

//get all product
exports.getAllproducts=async(req,res)=>{
    const allproducts=await Product.find();

    res.status(200).json({success:true,allproducts})
}

//create product
exports.createproduct=async(req,res,next)=>{
    const product=await Product.create(req.body);

    res.status(201).json({success:true, product})
}

//update product
exports.updateproduct=async(req,res)=>{
    let product=await Product.findById(req.params.id);
    //storing the info about the product in "product" by searching
    //in the database by the product's "id" 

    if(!product){
        return res.status(500).json({success:false,message:"Product not found"})
    }

    product= await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindandModify:false
    })

    res.status(200).json({success:true, product})
}

//delete product
exports.deleteproduct=async(req,res,next)=>{
    const product=await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({success:false,message:"Product not found"})
    }

    await Product.remove();

    res.status(200).json({success:true, message:"Product Deleted Successfully"})
}

//get product detail
exports.getproductdetail=async(req,res)=>{
    const product=await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({success:false,message:"Product not found"})
    }

    res.status(200).json({success:true, product})
}