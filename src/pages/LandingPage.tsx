import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";

const LandingPage: React.FC = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutSection />
        </>
    )
};

export default LandingPage;
