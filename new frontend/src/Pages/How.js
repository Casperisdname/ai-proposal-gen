import star from "../images/Star 1.png";

function How() {
  return (
    <div className="how" id="how-it-works">
      <div className="howHeading">How it works</div>
      <div className="howList">
        <div className="hl">
          <img src={star} />
          <li>Paste Email</li>
        </div>
        <div className="hl">
          <img src={star} />
          <li>Get Instant Reply</li>
        </div>
        <div className="hl">
          <img src={star} />
          <li>Ai Understands Context</li>
        </div>
      </div>
      <div className="howline"></div>
    </div>
  );
}
export default How;
