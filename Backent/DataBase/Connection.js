const mongoose =require("mongoose")


const URL ="mongodb+srv://Athif:12345@cluster0.aba6rha.mongodb.net/Crud-app?retryWrites=true&w=majority"


mongoose.connect(URL)
.then(()=>console.log("connected to databse"))
.catch((err)=>{
    console.log("db error:"+err)
})

exports.connection =mongoose.connection