import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
}, {timestamps: true});

export const Role = mongoose.model("Role", roleSchema);