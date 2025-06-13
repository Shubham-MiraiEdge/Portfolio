import React from "react";
import { Send } from 'lucide-react';

import MainButton from "./common/MainButton";
import footerBannerImg from "../assets/footerBanner.jpg";

const FooterBannerSection: React.FC = () => {
    return (
        <section className="p-6 md:p-10 w-full mx-auto">
            <div className="bg-black rounded-3xl p-6 md:p-5">
                <div className="flex flex-col md:flex-row items-center gap-20">
                    <div className="flex-shrink-0">
                        <img
                            src={footerBannerImg}
                            alt="Fitness"
                            className="h-80 w-96 rounded-xl md:max-w-xs object-cover"
                        />
                    </div>

                    <div className="flex-1 text-white space-y-6">
                        <div className="flex flex-wrap gap-4">
                            <MainButton title="Membership" />
                            <MainButton title="Newsletter" dark={true}/>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-light leading-snug">
                            Get the Last&nbsp; Updates, Special Offers, <br className="hidden md:block" />
                            and Exclusive Event Invitations!
                        </h2>

                        <div className="relative w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your Email Id"
                                className="w-full py-3 pl-5 pr-14 rounded-full bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2">
                                <Send size={18} />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
};

export default FooterBannerSection;
