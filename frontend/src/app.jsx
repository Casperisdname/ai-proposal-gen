import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleGenerate = async () => {
    const res = await fetch("http://localhost:8000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description: input }),
    });

    const data = await res.json();
    setOutput(data.output);
  };

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        AI Proposal & Contract Generator
      </h1>

      <textarea
        className="w-full h-40 border p-2"
        placeholder="Paste job description..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        className="mt-4 bg-black text-white px-4 py-2"
      >
        Generate
      </button>

      <pre className="mt-6 whitespace-pre-wrap">{output}</pre>
    </div>
  );
}

export default App;