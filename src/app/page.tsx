
import About from "./About/about";
import Careers from "./Career/careers";
import Contact from "./Contact/contact";
import HeroSection from "./Home/herosection";
import Portfolio from "./Portfolio/portfolio";
import Services from "./Service/services";

export default function Home() {
  return (
    <div>
   <HeroSection/>
   <Services/>
   <Portfolio/>
   <Careers/>
   <About/>
   <Contact/>
   </div>
  );
}
