import React, { useState, useRef } from "react";
import { useSpring, animated } from "@react-spring/web"; // Importing from react-spring
import ContactUs from "./ContactUs";
import GetInvolved from "./GetInvolved";
import HeroSection from "./HeroSection";
import Programs from "./Programs";
import SuccessStories from "./SuccessStories";
import Footer from "./footer";

const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Refs for each section to enable scrolling to them
  const programsRef = useRef<HTMLDivElement | null>(null);
  const successStoriesRef = useRef<HTMLDivElement | null>(null);
  const getInvolvedRef = useRef<HTMLDivElement | null>(null);
  const contactUsRef = useRef<HTMLDivElement | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);

    // Smooth scroll to the section content
    switch (section) {
      case "Programs":
        programsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "SuccessStories":
        successStoriesRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "GetInvolved":
        getInvolvedRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "ContactUs":
        contactUsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  // React Spring for slide-in effect
  const slideIn = useSpring({
    transform: activeSection ? "translateX(0%)" : "translateX(100%)", // Sliding from the right
    opacity: activeSection ? 1 : 0, // Fading in when the section appears
    config: { tension: 250, friction: 30 }, // Tuning animation
  });

  return (
    <div className="m-0 p-0 font-sans">
      {/* Hero Section */}
      <HeroSection />

      {/* Collapsible Sections */}
      <div className="bg-[#F0F4F8] text-gray-800 m-0 p-0 pb-0 mb-0">
        <div className="space-y-6 px-6 py-8">
          {/* Section List */}
          {[
            { id: "Programs", label: "Our Programs" },
            { id: "SuccessStories", label: "Success Stories" },
            { id: "GetInvolved", label: "Get Involved" },
            { id: "ContactUs", label: "Contact Us" },
          ].map((section) => (
            <div
              key={section.id}
              className={`cursor-pointer text-lg font-semibold border border-gray-300 rounded-lg p-5 shadow-sm transition-transform hover:scale-105 ${
                activeSection === section.id
                  ? "bg-[#036082] text-white shadow-lg"
                  : "bg-white text-gray-800"
              }`}
              onClick={() => toggleSection(section.id)}
            >
              {section.label}
            </div>
          ))}
        </div>
      </div>

      {/* Collapsible Content with Slide Animation */}
      <div
        className="relative z-10 bg-[#F9FAFB] text-gray-800 m-0 p-6"
        style={{ overflow: "hidden" }} // Hide overflowing content during the slide
      >
        <animated.div style={slideIn}>
          <div ref={programsRef}>
            {activeSection === "Programs" && <Programs />}
          </div>
          <div ref={successStoriesRef}>
            {activeSection === "SuccessStories" && <SuccessStories />}
          </div>
          <div ref={getInvolvedRef}>
            {activeSection === "GetInvolved" && <GetInvolved />}
          </div>
          <div ref={contactUsRef}>
            {activeSection === "ContactUs" && <ContactUs />}
          </div>
        </animated.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
