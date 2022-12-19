import mongoose, { Schema, model } from "mongoose";

const CarSchema = new Schema(
    {
        user_id: {
            type: String,
            required: true,
        },
        current: {
            brand: {
                type: String,
                required: true,
            },
            model: {
                type: String,
                required: true,
            },
        },
        recommended: {
            brand: {
                type: String,
                required: true,
            },
            model: {
                type: String,
                required: true,
            },
        },
    },
    {
        versionKey: false,
    }
);

const CarModel = model("car", CarSchema);

export { CarModel };
