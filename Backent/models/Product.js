const mongoose =require('mongoose');


const scheema=mongoose.Schema;


const productSchema =new scheema({
      name:{
        type: String,
        require:true,
      },
      categeory: {
        type:String,
        require:true,
      },
      description: {
        type:String,
        require:true,
      },
      Price:{
        type:String,
        require:true,
      },
      avaiable:{
        type:Boolean,
        
      },
      Image:{
        type:String,
        require:true
      }



})


   module.exports=mongoose.model("proudect",productSchema)