import { Swiper, SwiperSlide } from "swiper/react";


import MainButton from "./common/MainButton";
import RedirectButton from "./common/RedirectButton";
import FacilityCard from "./common/FacilityCard";
import PageButton from "./common/PageButton";
import Facilities01 from "../assets/FacilitiesImg/Facilities01.jpg";
import Facilities02 from "../assets/FacilitiesImg/Facilities02.jpg";
import Facilities03 from "../assets/FacilitiesImg/Facilities03.jpg";
import Facilities04 from "../assets/FacilitiesImg/Facilities04.jpg";

interface FacilitiesData {
    title: string;
    description: string;
    imgUrl: string;
    redirectIcon: boolean;
};

const facilitiesData: FacilitiesData[] = [
    {
        title: 'Tennis Court',
        description: "Professionally Designed Courts for Every Skill Level",
        imgUrl: Facilities01,
        redirectIcon: true
    },
    {
        title: 'Swimming Pool',
        description: "Dive In - Relax and Enjoy in Our Pool",
        imgUrl: Facilities02,
        redirectIcon: false
    },
    {
        title: 'Basketball Court',
        description: "Full-Sized Courts for play and Competition",
        imgUrl: Facilities03,
        redirectIcon: false
    },
    {
        title: 'Outdoor Area',
        description: "Enjoy the fresh air and beautiful surroundings",
        imgUrl: Facilities04,
        redirectIcon: false
    }
];

const FacilitiesSection = () => {
    return (
        <section className='px-4 sm:px-6 py-8 sm:py-12'>
            <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
                <div className="flex flex-col lg:flex-row lg:items-center gap-5">
                    <MainButton dark={true} title='Facilities' />
                    <p className="text-3xl text-black">Explore Our Facilities</p>
                </div>
                <RedirectButton dark={true} title='Explore Our Facilities' />
            </div>

            <div className='mt-10'>
                <Swiper
                    spaceBetween={20}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {facilitiesData.map((item: FacilitiesData, index: number) => (
                        <SwiperSlide key={index}>
                            <FacilityCard
                                title={item.title}
                                description={item.description}
                                imgUrl={item.imgUrl}
                                redirectIcon={item.redirectIcon}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="flex flex-col-reverse lg:flex-row justify-between items-center mt-10 gap-6">
                <div className="flex gap-3">
                    <div className="border border-gray-400 py-2 px-3 rounded-full">
                        <PageButton direction="left" />
                    </div>
                    <div className="border border-gray-400 py-2 px-3 rounded-full">
                        <PageButton direction="right" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <p className="text-lg text-gray-500">
                        Book a court for focused practice, team drills, or private coaching, and take your game to the next level.
                    </p>
                </div>
            </div>

        </section>
    )
};

export default FacilitiesSection;
