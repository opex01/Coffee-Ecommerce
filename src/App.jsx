import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Service";
import Buy from "./components/Buy/Buy";
import AppBanner from "./components/AppBanner/AppBanner";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <Buy />
      <AppBanner />
      <Footer />
    </div>
  );
};

export default App;
