import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoMarquee from "./components/LogoMarquee";
import ValueProposition from "./components/ValueProposition";
import FeatureGrid from "./components/FeatureGrid";
import ComplianceSteps from "./components/ComplianceSteps";
import DeploymentModels from "./components/DeploymentModels";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="bg-anaya-dark min-h-screen text-anaya-text font-sans selection:bg-anaya-blue/30">
      <Navbar />
      <Hero />
      {/* <LogoMarquee /> */}
      <ValueProposition />
      <FeatureGrid />
      <ComplianceSteps />
      <DeploymentModels />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default App;
