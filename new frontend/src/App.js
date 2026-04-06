import "./App.css";
import Navbar from "./Pages/Navbar";
import MainPage from "./Pages/MainPage";
import Proposal from "./Pages/Proposal";
import How from "./Pages/How";
import Features from "./Pages/Features";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Navbar />
        <MainPage />
        <Proposal />
        <How />
        <Features />
      </div>

      <Footer />
    </div>
  );
}

export default App;
