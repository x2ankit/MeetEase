const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/summarize", async (req, res) => {
  const { transcript } = req.body;
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are an assistant that summarizes meetings into actionable tasks." },
        { role: "user", content: transcript }
      ]
    });
    const summary = completion.choices[0].message.content;
    res.json({ summary });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error generating summary");
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
