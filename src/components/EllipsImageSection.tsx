import React from "react";
import Ellipse1 from "../assets/Ellipse1.png";
import Ellipse2 from "../assets/Ellipse2.png";
import Ellipse3 from "../assets/Ellipse3.png";
import Ellipse4 from "../assets/Ellipse4.png";


const EllipsImageSection: React.FC = () => {
    return (
        <>
            <div className="block max-w-100">
                <div className="flex items-center bg-transparent bg-gray-100">
                    <div className="flex items-center gap-[-10px] p-1 rounded-full border border-blue-400 bg-cover bg-center">
                    <img src={Ellipse1} alt="Profile 1" className="w-20 h-20 rounded-full border-4 border-white -ml-4 first:ml-0" />
                    <img src={Ellipse2} alt="Profile 2" className="w-20 h-20 rounded-full border-4 border-white -ml-4" />
                    <img src={Ellipse3} alt="Profile 3" className="w-20 h-20 rounded-full border-4 border-white -ml-4" />
                    <img src={Ellipse4} alt="Profile 4" className="w-20 h-20 rounded-full border-4 border-white -ml-4" />
                    </div>
                </div>
                <div>
                    <p className="text-base font-normal">
                        We’re committed to delivering a high-quality experience in a welcoming and supportive atmosphere
                    </p>
                </div>
            </div>
        </>
    );
  };
  
export default EllipsImageSection;
