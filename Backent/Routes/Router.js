const express =require("express")
const Product=require('../models/Product')
const Router=express.Router()
const ProductControlers=require('../Controlers/ProductControlers')

const app=express()


Router.get('/',ProductControlers.getAllProducts)


module.exports=Router;