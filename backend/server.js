// backend/server.js
import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config({ path: "./backend/.env" });

// ✅ DEBUG (correct place)
console.log("API KEY:", process.env.OPENAI_API_KEY);

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
app.post("/ai-trip", async(req, res) => {
    console.log("📥 Request received:", req.body);

    const { budget, travelType } = req.body;

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{
                role: "user",
                content: `Plan a ${travelType} trip under ₹${budget} with a day-wise itinerary.`,
            }, ],
        });

        console.log("✅ OpenAI Response:", completion);

        res.json({
            result: completion.choices[0].message.content,
        });

    } catch (err) {
        console.log("❌ ERROR OBJECT:", err); // 👈 IMPORTANT
        console.log("❌ ERROR MESSAGE:", err.message);
        console.log("❌ ERROR STATUS:", err.status);

        res.status(500).json({
            error: err.message || "Internal Server Error",
        });
    }
});
app.listen(5000, () => {
    console.log("Server running on port 5000");
});