import Ai from "../images/AI robot avatar.png";

function MainPage() {
  return (
    <div>
      <div className="main-page" id="home">
        <div className="left-side">
          <h1>Win More Clients with AI-Generated Proposals & Contracts.</h1>
          <p>
            Paste any job description and instantly get a professional proposal,
            pricing suggestion, and risk analysis.
          </p>
          <button className="main-btn">
            {" "}
            <a href="#paste">Generate Proposal</a>
          </button>
        </div>
        <div className="right-side">
          <div className="hero-glow"></div>
          <img src={Ai} />
        </div>
      </div>
    </div>
  );
}
export default MainPage;
