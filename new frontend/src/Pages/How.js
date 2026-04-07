import star from "../images/Star 1.png";

function How() {
  return (
    <div className="how" id="how-it-works">
      <div className="howHeading">How it works</div>
      <div className="howList">
        <div className="hl">
          <img src={star} />
          <li>User inputs job description</li>
        </div>
        <div className="hl">
          <img src={star} />
          <li>Frontend sends request to FastAPI backend</li>
        </div>
        <div className="hl">
          <img src={star} />
          <li>Backend calls OpenAI with structured prompt</li>
        </div>
        <div className="hl">
          <img src={star} />
          <li> AI returns formatted response</li>
        </div>
        <div className="hl">
          <img src={star} />
          <li> Frontend displays structured output</li>
        </div>
      </div>

      <div className="howline"></div>
    </div>
  );
}
export default How;
