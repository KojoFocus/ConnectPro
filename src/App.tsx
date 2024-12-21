import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import GettingStarted from "./components/GettingStarted";
import Programs from "./components/Programs";
import SuccessStories from "./components/SuccessStories";
import ContactUs from "./components/ContactUs";
// import Footer from "./components/footer";
import GetInvolved from "./components/GetInvolved";
import HomePage from "./components/HomePage";
import GetStartedPage from "./components/GetStartedPage";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar is displayed on all pages */}
        <Navbar />
        <div className="border-sky-500 px-0.5">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/get-started" element={<GetStartedPage />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/get-involved" element={<GetInvolved />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
