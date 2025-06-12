import React from "react";

import getInTouchImg from "../assets/getInTouch.jpg";
import GetInTouchForm from "./forms/GetInTouchForm";

const GetInTouchSection: React.FC = () => {
    return (
        <section className="w-full py-12 mx-auto flex flex-col-reverse lg:flex-row">
            <div className="w-full lg:w-1/2 h-[400px] lg:h-auto">
                <img
                    src={getInTouchImg}
                    alt="Workout"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="w-full lg:w-1/2 bg-gray-100 flex flex-col justify-center items-center p-8">
                <GetInTouchForm />
            </div>
        </section>
    )
};

export default GetInTouchSection;
