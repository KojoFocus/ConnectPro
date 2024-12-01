import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GettingStarted from "./components/GettingStarted";
import Programs from "./components/Programs";
import SuccessStories from "./components/SuccessStories";
import ContactUs from "./components/ContactUs";
// import Footer from "./components/footer";
import GetInvolved from "./components/GetInvolved";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <div className="border-sky-500 px-0.5">
        <Routes>
          {/* HomePage includes HeroSection, so no need to route for HeroSection */}
          <Route path="/" element={<HomePage />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/get-involved" element={<GetInvolved />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
