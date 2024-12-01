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
      
      <div className="bg-[#036082] m-0 p-0 pb-0 mb-0"> {/* Remove margins and paddings here as well */}
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
