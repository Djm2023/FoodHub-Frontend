import React from "react";
import Hero from "./Hero";
import { Cuisines } from "./HomeCuisines";
import { HowItWorks } from "./HomeHowItWorks";
import { TrustSection } from "./HomeTrustSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Cuisines />
      <HowItWorks />
      <TrustSection />
    </div>
  );
};

export default Home;
