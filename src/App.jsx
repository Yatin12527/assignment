import AboutSection from "./components/aboutSection";
import AnnouncementBanner from "./components/AnnouncementBanner";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-[#F6F4E9]">
      <Navigation />
      <AnnouncementBanner />
      <HeroSection />
      <AboutSection/>
    </div>
  );
}

export default App;
