import wave from "../images/wave.png";
import Human from "../images/Human.png";
import weather from "../images/Weather.png";

function Features() {
  return (
    <div className="features" id="features">
      <div className="featuresHeading">
        <h1>Features</h1>
      </div>
      <div className="featuresList">
        <div className="fcard">
          <img src={wave} />
          <p className="fcardp1">Tone Customization</p>
          <p className="fcardp2">
            Adjust tone to match your intent formal, friendly, or assertive.
          </p>
        </div>
        <div className="fcard">
          <img src={Human} />
          <p className="fcardp1">Smart reply generation</p>
          <p className="fcardp2">
            AI crafts clear, professional email responses instanly
          </p>
        </div>
        <div className="fcard">
          <img src={weather} />
          <p className="fcardp1">Context aware AI</p>
          <p className="fcardp2">
            Understands the email and responds intelligently.
          </p>
        </div>
      </div>
      <div className="featuresline"></div>
    </div>
  );
}
export default Features;
