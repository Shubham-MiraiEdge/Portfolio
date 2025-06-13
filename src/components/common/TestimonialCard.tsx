import React from "react";

import testimonialImg from "../../assets/testimonial.jpg"

const TestimonialCard: React.FC = () => {
    return (
        <div className="bg-white p-10 rounded-xl shadow-md max-w-5xl flex flex-col md:flex-row items-center gap-10">
            <img
                src={testimonialImg}
                alt="Client"
                className="w-40 h-40 rounded-full object-cover object-center"
            />
            <div>
                <h3 className="text-2xl font-medium text-gray-700">Hannah Schmitt</h3>
                <p className="text-gray-700 mt-2 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-xs text-gray-700 mt-3">May 8, 2020</p>
            </div>
        </div>
    )
};

export default TestimonialCard;
