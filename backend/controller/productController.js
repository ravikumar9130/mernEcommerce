const product = require("../models/product")


const getAllProducts = async (req, res) => {
    try {
        const products = await product.find({})
        res.json(products)
    }
    catch (err) {
        console.status(500).log(err)
    }
   

}
const getProductById = async (req, res) => {
    try {
        const product = await product.findById(req.params.id);
         res.json(product)
    }
    catch (err) {
        console.status(500).log(err)
    }
   

}


module.exports = {getAllProducts,getProductById};

