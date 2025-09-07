const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000; // Render/Railway sets PORT automatically

app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Health check route
app.get("/", (req, res) => {
  res.send("✅ MeetEase backend is running!");
});

// Summarize endpoint
app.post("/summarize", async (req, res) => {
  const { transcript } = req.body;

  if (!transcript) {
    return res.status(400).json({ error: "Transcript is required" });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are an assistant that summarizes meetings into short, 
          clear, actionable tasks in bullet points. 
          Always return plain text with one bullet per task. 
          Do not use Markdown (#, **, -). 
          Format example:
          • Alice: Do X by Friday
          • Bob: Do Y next week
          • Team: Do Z in next meeting`,
        },
        { role: "user", content: transcript },
      ],
    });

    let summary = completion.choices[0].message.content;

    // Safety cleanup in case model sneaks in Markdown
    summary = summary
      .replace(/[#*]/g, "") // remove Markdown headers/bold
      .replace(/^- /gm, "• "); // replace dashes with bullets

    res.json({ summary });
  } catch (err) {
    console.error("❌ OpenAI API error:", err.response ? err.response.data : err);
    res.status(500).json({ error: "Error generating summary" });
  }
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
