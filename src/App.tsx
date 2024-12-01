// import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/footer";
import GetInvolved from "./components/GetInvolved";
import HeroSection from "./components/HeroSection";
// import NavBar from "./components/NavBar";
import Programs from "./components/Programs";
import SuccessStories from "./components/SuccessStories";

export default function App() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="  border-sky-500 px-0.5 ">
        <HeroSection />
        {/* <AboutUs/> */}
        <div className="bg-[#F3EFE8]">
        <Programs />
        <SuccessStories />
        <GetInvolved/>
        <ContactUs/>
        <Footer/>
        </div>
       
      </div>
    </>
  );
}
