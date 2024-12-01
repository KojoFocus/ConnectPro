import ContactUs from './ContactUs';
import GetInvolved from './GetInvolved';
import HeroSection from './HeroSection'; // Assuming HeroSection is another component
import Programs from './Programs';
import SuccessStories from './SuccessStories';
import Footer from './footer'; // Footer component (import if needed)

const HomePage = () => {
  return (
    <div className="m-0 p-0"> {/* Remove margins and paddings for the entire page */}
      {/* Hero Section */}
      <HeroSection />
      
      <div className="bg-[#B0D0D3] m-0 p-0"> {/* Remove margins and paddings here as well */}
        <Programs />
        <SuccessStories />
        <GetInvolved />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
