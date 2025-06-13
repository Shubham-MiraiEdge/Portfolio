import React from 'react';

import MainButton from './common/MainButton';
import PageButton from './common/PageButton';
import TestimonialCard from './common/TestimonialCard';

const TestimonialSection: React.FC = () => {
    return (
        <section className="bg-gray-100 px-6 py-12 md:px-20">
            <div className="text-center mb-10">
                <MainButton title="Testimonial" dark={true} />
                <h2 className="mt-5 text-2xl md:text-4xl font-light text-black">
                    Here is what our Clients are saying about us
                </h2>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <PageButton direction="left" />
                <TestimonialCard />
                <PageButton direction="right" />
            </div>
        </section>
    )
};

export default TestimonialSection;
