import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import FacilitiesSection from "../components/FacilitiesSection";
import ExperienceSection from "../components/ExperienceSection";
import GetInTouchSection from "../components/GetInTouchSection";
import TestimonialSection from "../components/TestimonialSection";

const LandingPage: React.FC = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutSection />
            <FacilitiesSection />
            <ExperienceSection />
            <GetInTouchSection />
            <TestimonialSection />
        </>
    )
};

export default LandingPage;
