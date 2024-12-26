import React, { useState } from "react";
import ContactUs from "./ContactUs";
import GetInvolved from "./GetInvolved";
import HeroSection from "./HeroSection";
import Programs from "./Programs";
import SuccessStories from "./SuccessStories";
import Footer from "./footer";

const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

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

      {/* Collapsible Content at the End */}
      <div className="relative z-10 bg-[#F9FAFB] text-gray-800 m-0 p-6">
        {activeSection === "Programs" && <Programs />}
        {activeSection === "SuccessStories" && <SuccessStories />}
        {activeSection === "GetInvolved" && <GetInvolved />}
        {activeSection === "ContactUs" && <ContactUs />}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
