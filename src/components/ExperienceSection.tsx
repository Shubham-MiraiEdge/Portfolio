import React, { useState } from "react";

import experienceImg from "../assets/experience.jpg";
import MainButton from "./common/MainButton";
import RedirectButton from "./common/RedirectButton";

const tabs: string[] = ["Competition", "Training", "Friendly Match"];

const ExperienceSection: React.FC = () => {

    const [activeTab, setActiveTab] = useState("Competition");

    return (
        <section className="px-6 py-12 w-full mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="flex-1 space-y-10">
                    <div className="flex gap-3">
                        {tabs.map((tab, index) => (
                            <MainButton
                                key={index}
                                title={tab}
                                dark={true}
                                onClick={() => setActiveTab(tab)}
                                isActive={activeTab === tab}
                            />
                        ))}
                    </div>

                    <h2 className="text-5xl font-light text-black leading-snug">
                        Experience the best in Courts, Fields, and More
                    </h2>

                    <p className="text-gray-600 max-w-md">
                        Our state-of-art sports facilities offer a variety of courts and
                        fields, including tennis, basketball and football, designed to cater
                        to both casual player and competitive athletes.
                    </p>

                    <RedirectButton title="Book Now" dark={true} />
                </div>

                <div className="flex-1 shadow-xl/30">
                    <img
                        src={experienceImg}
                        alt="Match Highlight"
                        className="w-full h-auto rounded-2xl shadow-md"
                    />
                </div>
            </div>
        </section>
    )
};

export default ExperienceSection;
