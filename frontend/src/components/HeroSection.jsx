import React from "react";
import GradientBlinds from "../assets/GradientBlinds";
import MainBanner from "./MainBanner";

const HeroSection = () => {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      {/* Background Gradient Blinds */}
      <GradientBlinds
        gradientColors={["#FF9FFC", "#5227FF"]}
        angle={0}
        noise={0}
        blindCount={22}
        blindMinWidth={35}
        spotlightRadius={0.5}
        spotlightSoftness={1}
        spotlightOpacity={1}
        mouseDampening={0.18}
        distortAmount={0}
        shineDirection="left"
        mixBlendMode="lighten"
      />

      {/* Main Banner (let mouse move through, but keep buttons clickable) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="pointer-events-none">
          {/* Pass mouse events through the banner background */}
          <MainBanner />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
