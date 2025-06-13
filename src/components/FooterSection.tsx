import React from "react";
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

import MainButton from "./common/MainButton";

const FooterSection: React.FC = () => {
    return (
        <footer className="p-6 md:p-10 w-full mx-auto">
            <div className="bg-sky-200 p-6 md:py-10 md:px-25 rounded-3xl text-black">
                <div className="flex flex-col md:flex-row md:justify-between gap-10">
                    <div className="md:max-w-sm">
                        <h2 className="text-2xl font-normal leading-snug">
                            Your Play, Your Way-<br />
                            Modern Sports Facilities<br />
                            for Every Passion
                        </h2>
                        <div className="mt-5">
                            <MainButton title="Louvre sport" dark={true} />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-10">
                        <div>
                            <h4 className="text-xl font-normal mb-5">Facilities</h4>
                            <ul className="text-base space-y-1">
                                <li>Tennis Courts</li>
                                <li>Basketball Courts</li>
                                <li>Football Field</li>
                                <li>Swimming Pool</li>
                                <li>Gym & Fitness Canter</li>
                                <li>Multi-purpose Hall</li>
                                <li>Sauna & Relaxation Zone</li>
                                <li>Locker Rooms</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xl font-normal mb-5">About Us</h4>
                            <ul className="text-base space-y-1">
                                <li>Our Mission</li>
                                <li>Vision</li>
                                <li>Community</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xl font-normal mb-5">Social</h4>
                            <ul className="space-y-2 text-base">
                                <li>
                                    <a href="#" className="flex items-center gap-2 border border-gray-400 px-3 py-1 rounded-full hover:bg-white">
                                        <Instagram className="text-black" /> Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-2 border border-gray-400 px-3 py-1 rounded-full hover:bg-white">
                                        <Facebook className="text-black" /> Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-2 border border-gray-400 px-3 py-1 rounded-full hover:bg-white">
                                        <Linkedin className="text-black" /> LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-2 border border-gray-400 px-3 py-1 rounded-full hover:bg-white">
                                        <Youtube className="text-black" /> YouTube
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-400" />

                <div className="flex flex-row justify-between text-sm">
                    <p>Privacy Policy/Terms</p>
                    <p>All right reserved@louvre 2024</p>
                </div>
            </div>
        </footer>
    )
};

export default FooterSection;
