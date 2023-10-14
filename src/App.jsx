import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import HeroComponent from "./components/HeroComponent";
import AboutComponent from "./components/AboutComponent";
import PortofolioComponent from "./components/PortofolioComponent";
import ContactComponent from "./components/ContactComponent";
import SosmedComponent from "./components/SosmedComponent";
import Footer from "./components/Footer";
import TrainingComponent from "./components/TrainingComponent";

const App = () => {
  return (
    <div>
      <div>
        <NavbarComponent />
      </div>
      <div className="mt-4">
        <HeroComponent />
      </div>
      <div>
        <AboutComponent />
      </div>
      <div className="mt-5">
        <PortofolioComponent />
      </div>
      <div className="mt-5">
        <TrainingComponent />
      </div>
      <div className="mt-5">
        <ContactComponent />
      </div>
      <div className="mt-5">
        <SosmedComponent />
      </div>
      <div className="py-3">
        <Footer />
      </div>
    </div>
  );
};

export default App;
