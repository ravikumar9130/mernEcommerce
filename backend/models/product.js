const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    Name: {
        type: String,
        require: true
    },
    Info: {
        type: String,
        require: true
    }
})

const product = mongoose.model('product', productSchema);


module.exports = product ;