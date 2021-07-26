require("dotenv").config()

const mangoConnect = require ("./config/db")
const product = require("./models/product");
const products = require("./data/products")

mangoConnect()


const importData = async () => {
    try {
        
        await product.deleteMany({});
        await product.insertMany(products)
        console.log(" product is exportes sucessfully>>>.....")
        
        process.exit();
    }
    catch (err) {
        console.log("error in sender file go and check this...")
        console.log( err )
        process.exit(1);
    }
}


importData()