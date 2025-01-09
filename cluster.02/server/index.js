const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose');

const { Schema } = mongoose;






const blogSchema = new Schema({
  title: String, 
  description: String,
  count: Number,
});
const ProductModel = mongoose.model('Product', blogSchema);

app.get('/api/products', async (req, res) => {

   try {
    const products = await ProductModel.find({});
    res.status(200).json({data:products , message:"succes"})
   } catch (error) {
    console.log("Error");
    
   }
  })
  app.get('/api/products/:id', async (req, res) => {
const {id} =req.params
    try {
     const products = await ProductModel.findById(id);
     res.status(200).json({data:products , message:"succesfully find"})
    } catch (error) {
     console.log("Error");
     
    }
   })
   app.delete('/api/products/:id', async (req, res) => {
    const {id} =req.params
        try {
         const products = await ProductModel.findByIdAndDelete(id);
         res.status(200).json({data:products , message:"succesfully deleted"})
        } catch (error) {
         console.log("Error");
         
        }
       })


mongoose.connect('mongodb+srv://aslanzmazmp202:aslan2004@first.tf5hd.mongodb.net/?retryWrites=true&w=majority&appName=first')
.then(() => {
    
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  console.log('Connected!')});