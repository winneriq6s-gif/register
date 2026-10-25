import { useState } from "react";
import { askGroq } from "./lib/groq";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function run() {
    setLoading(true);
    try {
      const key = import.meta.env.VITE_GROQ_API_KEY ?? "";
      const out = await askGroq(prompt, key);
      setAnswer(out);
    } catch (e) {
      setAnswer(String(e));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <h1>AI App Builder</h1>
      <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} rows={6} style={{ width: "100%" }} />
      <button onClick={run} disabled={loading}>{loading ? "Thinking..." : "Generate"}</button>
      <pre>{answer}</pre>
    </div>
  );
}

// pr-062 touch

// unique change for PR 56
