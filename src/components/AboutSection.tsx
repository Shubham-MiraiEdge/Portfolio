import React from "react";
import MainButton from "./common/MainButton";
import RedirectButton from "./common/RedirectButton";
import indoorImg from "../assets/swimmingImg.jpg";
import outdoorImg from "../assets/basketballImg.jpg";
import PageButton from "./common/PageButton";


const AboutSection: React.FC = () => {
    return (
        <section className="flex flex-col lg:flex-row items-start justify-between px-6 py-12 gap-8">
            <div className="lg:w-1/3 space-y-6 h-96">
                <MainButton dark={true} title="About Louvre" />
                <h2 className="text-3xl font-light mt-10">
                    At Louvre sport center, we’re passionate about providing a top-notch environment for athletes of all levels.
                </h2>
                <div className="mt-10 lg:mt-24">
                    <RedirectButton dark={true} title="Get in Touch" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 lg:w-2/3">
                <div
                    className="relative w-full md:w-1/2 rounded-xl overflow-hidden bg-cover bg-center h-96 flex flex-col justify-between p-4 text-white"
                    style={{ backgroundImage: `url(${indoorImg})` }}
                >
                    <div>
                        <MainButton title="Indoor Area" />
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold text-sm">Versatile space for a wide range of activities</p>
                        <RedirectButton />
                    </div>
                </div>

                <div className="relative w-full md:w-1/2">
                    <div
                        className="rounded-xl overflow-hidden bg-cover bg-center h-64 flex flex-col justify-between p-4 text-white"
                        style={{ backgroundImage: `url(${outdoorImg})` }}
                    >
                        <div>
                            <MainButton title="Outdoor Area" />
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="font-bold text-lg">Futsal Court</p>
                            <RedirectButton dark={true} />
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-3 mt-6">
                        <p className="text-base text-gray-500">Discover your new - favourite place - to play, train, and compete.</p>
                        <div className="flex items-center gap-2">
                            <div className="border border-gray-400 py-2 px-3 rounded-full">
                                <PageButton direction="left"/>
                            </div>
                            <div className="border border-gray-400 py-2 px-3 rounded-full">
                                <PageButton direction="right"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AboutSection;
