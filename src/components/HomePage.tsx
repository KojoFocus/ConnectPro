import ContactUs from './ContactUs';
import GetInvolved from './GetInvolved';
import HeroSection from './HeroSection'; // Assuming HeroSection is another component
import Programs from './Programs';
import SuccessStories from './SuccessStories';
import Footer from './footer'; // Footer component (import if needed)

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      <div className="bg-[#F3EFE8]">
        <Programs />
        <SuccessStories />
        <GetInvolved/>
        <ContactUs/>
        <Footer/>
        </div>
    </div>
  );
};

export default HomePage;
