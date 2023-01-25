const product=require('../models/Product')



const getAllProducts =async(req,res,next)=>{
    let Products ;
    try{
        Products=await product.find()
    }catch(err) {
        console.log(err)
    }
    if(!Products) {
        return res.status(404).json({message:"no products fonds"})
    }
    return res.status(200).json({Products})
}



exports.getAllProducts=getAllProducts;