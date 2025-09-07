import { useState } from "react";
import axios from "axios";
import "./styles.css";

function App() {
  const [transcript, setTranscript] = useState("");
  const [summary, setSummary] = useState("");

  const handleSummarize = async () => {
    try {
      const res = await axios.post(
        "https://meetease-3ng7.onrender.com/", // <-- Render backend
        { transcript }
      );
      setSummary(res.data.summary);
    } catch (err) {
      console.error("Error generating summary:", err);
      setSummary("❌ Failed to generate summary. Please try again.");
    }
  };

  return (
    <div className="container">
      <h1>MeetEase</h1>
      <textarea
        rows={10}
        placeholder="Paste your meeting transcript here..."
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
      />
      <button onClick={handleSummarize}>Generate Summary</button>
      {summary && (
        <div className="summary-box">
          <h2>Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default App;
