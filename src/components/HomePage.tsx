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
    <div className="m-0 p-0">
      {/* Hero Section */}
      <HeroSection />

      <div className="bg-[#036082] text-white m-0 p-0 pb-0 mb-0">
        {/* Collapsible Sections */}
        <div className="space-y-4 p-4">
          {/* Programs */}
          <div className="collapse collapse-arrow border-b border-[#034d60]">
            <input
              type="checkbox"
              checked={activeSection === "Programs"}
              onChange={() => toggleSection("Programs")}
            />
            <div className="collapse-title text-xl font-medium bg-[#036082]">
              Programs
            </div>
            <div className="collapse-content">
              <Programs />
            </div>
          </div>

          {/* Success Stories */}
          <div className="collapse collapse-arrow border-b border-[#034d60]">
            <input
              type="checkbox"
              checked={activeSection === "SuccessStories"}
              onChange={() => toggleSection("SuccessStories")}
            />
            <div className="collapse-title text-xl font-medium bg-[#036082]">
              Success Stories
            </div>
            <div className="collapse-content">
              <SuccessStories />
            </div>
          </div>

          {/* Get Involved */}
          <div className="collapse collapse-arrow border-b border-[#034d60]">
            <input
              type="checkbox"
              checked={activeSection === "GetInvolved"}
              onChange={() => toggleSection("GetInvolved")}
            />
            <div className="collapse-title text-xl font-medium bg-[#036082]">
              Get Involved
            </div>
            <div className="collapse-content">
              <GetInvolved />
            </div>
          </div>

          {/* Contact Us */}
          <div className="collapse collapse-arrow border-b border-[#034d60]">
            <input
              type="checkbox"
              checked={activeSection === "ContactUs"}
              onChange={() => toggleSection("ContactUs")}
            />
            <div className="collapse-title text-xl font-medium bg-[#036082]">
              Contact Us
            </div>
            <div className="collapse-content">
              <ContactUs />
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
