# AI-Powered Business Modules

This project implements **two AI-powered modules** with MongoDB integration:

- **Module 1: Auto-Category & Tag Generator**
- **Module 2: B2B Proposal Generator**

The remaining modules (Impact Reporting, WhatsApp Support Bot) are outlined in architecture only.

---

## 🚀 Architecture Overview

### Layers
- **AI Layer** → Handles classification, proposal generation (mock AI functions, replace with LLM API).
- **Business Logic Layer** → Validates categories, budgets, sustainability filters.
- **Database Layer (MongoDB)** → Stores structured JSON outputs with prompt + response logs.

### Flow
1. Client sends request → Express route.
2. AI logic generates structured JSON.
3. Business rules validate output.
4. MongoDB stores JSON + audit logs.
5. Response returned to client.

---

## 📂 Collections
- `products` → Auto-category + tags.
- `proposals` → B2B proposals.

---

## 🧠 AI Prompt Design

### Module 1 Prompt
### Module 2 Prompt


---

## 🔑 Technical Requirements
- Structured JSON outputs
- Prompt + response logging
- Environment-based API key management
- Clear separation of AI and business logic
- Error handling and validation