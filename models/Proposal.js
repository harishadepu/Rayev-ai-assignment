import mongoose from "mongoose";

const proposalSchema = new mongoose.Schema({
    proposal_id: { type: String, required: true },
    client: { type: String, required: true },
    budget_limit: { type: Number, required: true },
    product_mix: [
        {
        item: String,
        quantity: Number,
        cost: Number
        }
    ],
    total_cost: Number,
    impact_summary: String,
    timestamp: { type: Date, default: Date.now },
    ai_prompt: String,
    ai_response: Object

})
const Proposal = mongoose.model('Proposal',proposalSchema)

export default Proposal

