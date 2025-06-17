import React from "react";

import Navbar from "@components/Navbar";
import Hero from "@components/Hero";
import AboutSection from "@components/AboutSection";
import FacilitiesSection from "@components/FacilitiesSection";

const LandingPage: React.FC = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutSection />
            <FacilitiesSection />
        </>
    )
};

export default LandingPage;
