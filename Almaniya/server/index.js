const express = require("express")
const app = express()
const mongoose = require('mongoose');
const productsRouter = require("./routes/ProductRoutes");
require('dotenv').config()

const PORT = process.env.PORT || 8080
const DB = process.env.DB


app.use(express.json())
app.use("/products",productsRouter);


mongoose.connect(DB)
    .then(() => {

        console.log('Connected!')

        app.listen(PORT, () => {
            console.log(`Example app listening on port ${PORT}`)
        })

    });
