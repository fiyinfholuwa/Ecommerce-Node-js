const Product = require('../model/productModel');
const Features = require('../helpers/features');

// create Product 
exports.createProduct = async(req, res, next)=>{
const product = await Product.create(req.body);
res.status(201).json({
    success: true,
    product
});
}
// get all product 
exports.getAllproduct= async (req, res) =>{
    const productCount = await Product.countDocuments();
    const resultPerPage = 4;
    const feature = new Features(Product.find(), req.query).search().filter().pagination(resultPerPage); 
    const product = await feature.query; 
    res.status(200).json({
        success : true,
        product
    });
}

// update product 

exports.updateProduct = async (req, res) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        res.status(500).json({
            success: false,
            message : "Product is not found with this ID"
        });
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        runValidators: true,
        useUnified: false
    })
    res.status(200).json({
        success: true,
        product,
        resultPerPage
    })
}

// delete product 
exports.deleteProduct = async (req, res)=>{
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(500).json({
            success: false,
            message : "Product is not found with this ID"
        });
    }
    await product.remove();
    res.status(200).json({
        success: true,
        message: "Product is successfully deleted"
    })
}

// single product 
exports.getSingleProduct = async(req, res, next) =>{
    const product = await Product.findById(res.params.id);
    if (!product) {
        res.status(500).json({
            success: false,
            message : "Product is not found with this ID"
        });
    }
    res.status(200).json({
        success: true,
        product
    })
}