import React from "react";

import Ellipse1 from "@assets/Ellipse1.png";
import Ellipse2 from "@assets/Ellipse2.png";
import Ellipse3 from "@assets/Ellipse3.png";
import Ellipse4 from "@assets/Ellipse4.png";

const ellipseImageData: string[] = [Ellipse1, Ellipse2, Ellipse3, Ellipse4]

const EllipseImageSection: React.FC = () => {
    return (
        <div className="block max-w-100">
            <div className="flex items-center bg-transparent">
                <div className="flex items-center gap-[-10px] px-3 py-1 rounded-full border-2 border-blue-700 bg-cover bg-center">
                    {ellipseImageData?.map((imgPath: string, index: number) => (
                        <img key={index} src={imgPath} alt="Profile 2" className="w-20 h-20 rounded-full -ml-4 first:ml-0" />
                    ))}
                </div>
            </div>
            <div>
                <p className="text-lg font-normal">
                    We’re committed to delivering a high-quality experience in a welcoming and supportive atmosphere
                </p>
            </div>
        </div>
    );
};

export default EllipseImageSection;
