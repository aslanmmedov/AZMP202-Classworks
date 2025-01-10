const ProductModel = require("../models/ProductModel");

const GetAllData = async (req, res) => {
    try {
        const products = await ProductModel.find({});
        res.status(200).json({data:products,message:"succes"})
    } catch (error) {
        console.log(error);
        
    }
}

const AddNewData =  async (req, res) => {

    const {title,description,price} = req.body;
    console.log(req.body);
    
    try {
        const NewProduct = ProductModel({...req.body});
        await NewProduct.save();
        res.status(201).json({data:NewProduct,message:"succesfully added"})
    } catch (error) {
        console.log(error);
    }
}
const EditProduct =  async (req, res) => {
    const {id} = req.params;  
   try {
       const EditProduct = await ProductModel.findByIdAndUpdate(id,{...req.body},{
           new: true,
         });
       res.status(200).json({data:EditProduct,message:"succesfully updated"})
   } catch (error) {
       console.log(error);
   }
}

const DeleteDataById =  async (req, res) => {
    const {id} = req.params;
    try {
        const DeletedProducts = await ProductModel.findByIdAndDelete(id);
        res.status(200).json({data:DeletedProducts,message:"succesfully deleted"})
    } catch (error) {
        console.log(error);
        
    }
}

const GetDataById =   async (req, res) => {
    const {id} = req.params;
    try {
        const product = await ProductModel.findById(id);
        res.status(200).json({data:product,message:"User succesfuly found"})
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {
    GetAllData,
    GetDataById,
    EditProduct,
    DeleteDataById,
    AddNewData,
}