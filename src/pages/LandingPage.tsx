import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import FacilitiesSection from "../components/FacilitiesSection";
import ExperienceSection from "../components/ExperienceSection";
import GetInTouchSection from "../components/GetInTouchSection";
import TestimonialSection from "../components/TestimonialSection";
import FooterBannerSection from "../components/FooterBannerSection";
import FooterSection from "../components/FooterSection";

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
            <FooterBannerSection />
            <FooterSection />
        </>
    )
};

export default LandingPage;
