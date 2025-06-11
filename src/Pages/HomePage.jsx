
import FooterSection from "../Component/FooterSection";
import HeroSection from "../Component/HeroSection";
import Navbar from "../Component/Navbar";
import SecondHeroSection from "../Component/SecondHeroSection";
import ToggleTheme from "../Component/ToggleTheme";

const Home = ()=>{
    return (
        <>

     <ToggleTheme />
     <Navbar />
     <HeroSection />
     <SecondHeroSection />
     <FooterSection />
        </>
    );

}

export default Home;