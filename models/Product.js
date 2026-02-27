import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    product_id: { type: String, required: true },
    primary_category: { type: String, required: true },
    sub_category: { type: String },
    seo_tags: [String],
    sustainability_filters: [String],
    timestamp: { type: Date, default: Date.now },
    ai_prompt: String,
    ai_response: Object
})
const Product = mongoose.model('Product',productSchema)

export default Product

