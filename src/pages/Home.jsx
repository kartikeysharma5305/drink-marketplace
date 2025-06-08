import HeroSection from "../components/HeroSection";
import HomeSection2 from "../components/HomeSection2";
import HomeSection3 from "../components/HomeSection3";
import HomeSection4 from "../components/HomeSection4";
import HomeSection5 from "../components/HomeSection5";

// Home component serves as the main landing page of the website
const Home = () => {
  return (
    <>
      {/* HeroSection displays the main banner or introductory section */}
      <HeroSection />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
    </>
  );
};

export default Home;
