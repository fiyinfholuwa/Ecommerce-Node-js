const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please input the product name"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Please add the product desription"],
        maxlength : [4000, "Description cannot exceed 4000 wrods"],
    },
    price: {
        type: Number,
        required: [true, "please Add a price for the product"],
    },
    discountPrice: {
        type: String,
    },
    color: {
        type: String,
    },
    size: {
        type: String,
    },
    rating: {
        type: String,
        default: 0,
    },
    image: [
        {
            public_id :{
                type: String,
                required: true,
            },
            url:{
                type : String,
                required: true,
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please enter the Product Category"]
    },
    stock: {
        type: Number,
        required: [true, "Please enter the stocks of your Product"],
    },
    numOfReview: {
        type: String,
        default: 0,
    },
    reviews:[{
        user :{
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        comment: {
            type: String,
        },
        time: {
            type: Date,
            default: Date.now
        }
    }], 
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Product", productSchema);