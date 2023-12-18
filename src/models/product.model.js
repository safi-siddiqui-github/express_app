import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        default: 0,
    },
    productImage: {
        type: String
    },
}, {timestamps: true});

export const Property = mongoose.model("Property", propertySchema);