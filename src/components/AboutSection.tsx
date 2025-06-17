import React from "react";

import MainButton from "@components/common/MainButton";
import RedirectButton from "@components/common/RedirectButton";
import PageButton from "@components/common/PageButton";
import indoorImg from "@assets/swimmingImg.jpg";
import outdoorImg from "@assets/basketballImg.jpg";

const AboutSection: React.FC = () => {
    return (
        <section className="flex flex-col lg:flex-row w-full items-start justify-between mt-0 md:mt-19 px-[15px] md:px-[44px] py-12 gap-5">
            <div className="flex flex-col justify-between w-full">
                <div>
                    <MainButton title="About Louvre" className="px-[25px] py-[16px] border border-[#D2D2D2]" />
                </div>
                <h2 className="text-[34px] font-light mt-4">
                    At Louvre sport center, we’re passionate about providing a top-notch environment for athletes of all levels.
                </h2>
                <div className="mt-14">
                    <RedirectButton title="Get in Touch" className="px-[22px] py-[17px] bg-black text-white" />
                </div>
            </div>
            <div
                className="rounded-3xl flex flex-col justify-between bg-cover bg-center h-[388px] mt-5 md:mt-0 w-full box-border py-[24px] text-white"
                style={{ backgroundImage: `url(${indoorImg})` }}
            >
                <div className="ml-[40px]">
                    <MainButton title="Indoor Area" className="px-[23px] py-[10px] backdrop-blur-md" />
                </div>
                <div className="flex justify-between items-center px-[40px] gap-4">
                    <p className="text-xl font-medium">
                        Versatile space for a wide range of activities
                    </p>
                    <RedirectButton className="bg-white text-black p-[15px]" />
                </div>
            </div>
            <div className="w-full">
                <div
                    className="rounded-3xl h-[228px] w-full bg-cover bg-center flex flex-col justify-between text-white"
                    style={{ backgroundImage: `url(${outdoorImg})` }}
                >
                    <div className="ml-[30px] mt-[25px]">
                        <MainButton title="Outdoor Area" className="px-[15px] text-xs py-[10px] backdrop-blur-md" />
                    </div>
                    <div className="flex items-center justify-between px-[32px] pb-[25px]">
                        <p className="font-bold text-xl">Futsal Court</p>
                        <RedirectButton className="bg-black text-white p-[12px]" />
                    </div>
                </div>
                <div className="flex justify-center items-center w-full gap-5 mt-6">
                    <p className="text-lg font-normal text-gray-500">Discover your new - favorite place - to play, train, and compete.</p>
                    <div className="flex items-center gap-2">
                        <PageButton direction="left" className="p-[10px]" />
                        <PageButton direction="right" className="p-[10px]" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AboutSection;
