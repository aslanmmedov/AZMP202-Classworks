// const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://aslanzmazmp202:aslan2004@first.tf5hd.mongodb.net/?retryWrites=true&w=majority&appName=first')
//   .then(() => console.log('Connected!'));


const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  title: String,
  description: String,
  price: Number,
});

const ProductModel = mongoose.model('Product', productSchema);

app.get('/products',  async (req, res) => {
    try {
        const products = await ProductModel.find({});
        res.status(200).json({data:products,message:"succes"})
    } catch (error) {
        console.log(error);
        
    }
})
app.get('/products/:id',  async (req, res) => {
    const {id} = req.params;
    try {
        const product = await ProductModel.findById(id);
        res.status(200).json({data:product,message:"User succesfuly found"})
    } catch (error) {
        console.log(error);
        
    }
})
app.delete('/products/delete/:id',  async (req, res) => {
    const {id} = req.params;
    try {
        const DeletedProducts = await ProductModel.findByIdAndDelete(id);
        res.status(200).json({data:DeletedProducts,message:"succesfully deleted"})
    } catch (error) {
        console.log(error);
        
    }
})
mongoose.connect('mongodb+srv://aslanzmazmp202:aslan2004@first.tf5hd.mongodb.net/?retryWrites=true&w=majority&appName=first')
    .then(() => {

        console.log('Connected!')

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })

    });

