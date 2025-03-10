import Download from "./sections/Download.jsx";
import Faq from "./sections/Faq.jsx";
import Features from "./sections/Features.jsx";
import Footer from "./sections/Footer.jsx";
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Pricing from "./sections/Pricing.jsx";
import Testimonials from "./sections/Testimonials.jsx";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq/>
      <Testimonials/>
      <Download/>
      <Footer/>
    </main>
  );
};

export default App;
