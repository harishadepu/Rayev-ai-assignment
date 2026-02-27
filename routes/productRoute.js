import express from 'express'
import Product from '../models/Product.js';

const productRoute = express.Router()

function generateCategoryTags(input) {
  return {
    product_id: input.product_id,
    primary_category: "Packaging",
    sub_category: "Compostable Bags",
    seo_tags: ["eco-friendly", "compostable", "biodegradable", "plastic-free", "sustainable packaging"],
    sustainability_filters: ["compostable", "plastic-free"],
    ai_prompt: input.description,
    ai_response: { confidence: 0.92 }
  };
}

productRoute.post("/addProduct", async (req, res) => {
  try {
    const aiResult = generateCategoryTags(req.body);
    const product = new Product(aiResult);
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

productRoute.get('/products',async(req,res)=>{
  try {
    const data = await Product.find({})
    res.json({data})
    
  } catch (err) {
    res.status(500).json({error: err.message})
  }
})

export default productRoute