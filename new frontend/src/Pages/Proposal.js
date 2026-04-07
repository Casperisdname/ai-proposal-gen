import { useState } from "react";

const BACKEND_URL = "https://ai-proposal-gen-1.onrender.com";

function Proposal() {
  const [jobDescription, setJobDescription] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const parseOutput = (text) => {
    if (!text) return {};

    const sections = {
      proposal: "",
      pricing: "",
      contract: "",
      risks: "",
    };

    const proposalMatch = text
      .split("=== PROPOSAL ===")[1]
      ?.split("=== PRICING ===")[0];

    const pricingMatch = text
      .split("=== PRICING ===")[1]
      ?.split("=== CONTRACT ===")[0];

    const contractMatch = text
      .split("=== CONTRACT ===")[1]
      ?.split("=== RISKS ===")[0];

    const risksMatch = text.split("=== RISKS ===")[1];

    if (proposalMatch) sections.proposal = proposalMatch.trim();
    if (pricingMatch) sections.pricing = pricingMatch.trim();
    if (contractMatch) sections.contract = contractMatch.trim();
    if (risksMatch) sections.risks = risksMatch.trim();

    return sections;
  };

  const handleGenerate = async () => {
    if (!jobDescription.trim()) {
      setError("Paste a job description first!");

      setTimeout(() => {
        setError("");
      }, 3000);

      return;
    }

    try {
      setLoading(true);
      setOutput("");

      const res = await fetch(`${BACKEND_URL}/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: jobDescription }),
      });

      const data = await res.json();
      setOutput(data.output || "No output received");
    } catch (err) {
      console.error(err);
      setError("Failed to generate proposal");

      setTimeout(() => {
        setError("");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="paste"
      className="proposal-page"
      style={{ textAlign: "center", padding: "50px 20px" }}
    >
      <div className="proposal-glow"></div>
      <div className="proposal-glow1"></div>

      <p className="pheader" style={{ color: "white", fontSize: "28px" }}>
        Proposal Architecture
      </p>

      <p
        className="pdescription"
        style={{ color: "white", marginBottom: "20px" }}
      >
        Generate winning proposal drafts in seconds
      </p>

      {error && <div className="proposal-error">{error}</div>}

      <input
        className="proposal-input1"
        type="text"
        placeholder="Paste freelance job description here."
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        style={{
          width: "80%",
          maxWidth: "600px",
          padding: "12px 20px",
          borderRadius: "10px",
          border: "1px solid #fff",
          backgroundColor: "rgba(0,0,0,0.8)",
          color: "white",
          marginBottom: "20px",
        }}
      />

      <div>
        <button
          className="proposal-button"
          onClick={handleGenerate}
          disabled={loading}
          style={{
            padding: "12px 30px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#745fff",
            color: "white",
            marginBottom: "20px",
          }}
        >
          {loading ? "Generating..." : "Generate Proposal"}
        </button>
      </div>

      <div className="proposal-tabs">
        <button className="tab active">Proposal</button>
        <button className="tab">Pricing</button>
        <button className="tab">Risk</button>
        <button className="tab">Contract</button>
      </div>

      {output && (
        <div
          className="proposal-output"
          style={{
            backgroundColor: "rgba(0,0,0,0.85)",
            color: "white",
            padding: "20px",
            borderRadius: "20px",
            maxWidth: "800px",
            margin: "30px auto 0",
            textAlign: "left",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          {output}
        </div>
      )}

      <div
        className="proposal-architecture"
        style={{ marginTop: "40px", color: "white" }}
      ></div>
    </div>
  );
}

export default Proposal;
