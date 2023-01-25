const express =require("express")
const app =express()
const connection=require('./DataBase/Connection')







app.listen(5000,()=>{
    console.log("server started port 5000")
})




