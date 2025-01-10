const express = require('express')

const {
    GetAllData,
    GetDataById,
    EditProduct,
    DeleteDataById,
    AddNewData,
} = require("../controllers/ProductControllers");

const router = express.Router();


router.get('/',GetAllData )
router.post('/add',AddNewData)
router.put('/edit/:id', EditProduct)
router.get('/:id',GetDataById)
router.delete('/delete/:id',DeleteDataById)

module.exports = router;