import express from 'express'
import Proposal from '../models/Proposal.js';

const proposalRoute = express.Router()

function generateProposal(input) {
  const budget = input.budget_limit;
  const productMix = [
    { item: "Recycled Paper Cups", quantity: 10000, cost: 15000 },
    { item: "Compostable Bags", quantity: 5000, cost: 20000 },
    { item: "Bamboo Cutlery", quantity: 3000, cost: 15000 }
  ];
  const totalCost = productMix.reduce((sum, p) => sum + p.cost, 0);

  return {
    proposal_id: "B2B-" + Date.now(),
    client: input.client,
    budget_limit: budget,
    product_mix: productMix,
    total_cost: totalCost,
    impact_summary: `This proposal reduces 2 tons of plastic waste annually and positions ${input.client} as a leader in sustainable retail packaging.`,
    ai_prompt: JSON.stringify(input),
    ai_response: { confidence: 0.95 }
  };
}

proposalRoute.post("/addProposal", async (req, res) => {
  try {
    const aiResult = generateProposal(req.body);
    if (aiResult.total_cost > aiResult.budget_limit) {
      return res.status(400).json({ error: "Proposal exceeds budget limit" });
    }
    const proposal = new Proposal(aiResult);
    await proposal.save();
    res.json(proposal);
  } catch (err) {
    res.status(500).json({ error: "Failed to generate proposal" });
  }
});

proposalRoute.get('/proposals',async(req,res)=>{
  try {
    const data = await Proposal.find({})
    res.json({data})
    
  } catch (err) {
    res.status(500).json({error: err.message})
  }
})

export default proposalRoute

