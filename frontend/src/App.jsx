import { useState } from "react";
import axios from "axios";
import "./styles.css";

function App() {
  const [transcript, setTranscript] = useState("");
  const [summary, setSummary] = useState("");

  const handleSummarize = async () => {
    const res = await axios.post("http://localhost:5000/summarize", { transcript });
    setSummary(res.data.summary);
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
