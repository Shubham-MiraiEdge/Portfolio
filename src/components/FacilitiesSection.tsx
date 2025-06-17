import { Swiper, SwiperSlide } from "swiper/react";

import MainButton from "@components/common/MainButton";
import RedirectButton from "@components/common/RedirectButton";
import PageButton from "@components/common/PageButton";
import FacilityCard from "@components/common/FacilityCard";
import Facilities01 from "@assets/FacilitiesImg/Facilities01.jpg";
import Facilities02 from "@assets/FacilitiesImg/Facilities02.jpg";
import Facilities03 from "@assets/FacilitiesImg/Facilities03.jpg";
import Facilities04 from "@assets/FacilitiesImg/Facilities04.jpg";

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
        <section className='px-[15px] md:px-[44px] py-12'>
            <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
                <div className="flex flex-col lg:flex-row lg:items-center gap-9">
                    <div>
                        <MainButton title='Facilities' className="ml-[2px] px-[20px] py-[12px]" />
                    </div>
                    <p className="text-4xl text-black">Explore Our Facilities</p>
                </div>
                <div>
                    <RedirectButton title='view all' className="bg-black text-white px-[12px] py-[15px]" />
                </div>
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
                    <PageButton direction="left" className="p-5"/>
                    <PageButton direction="right" className="p-5" />
                </div>
                <div className="md:w-[500px] text-center lg:text-right">
                    <p className="text-xl text-gray-500 md:w-[500px]">
                        Book a court for focused practice, Team drills, or private coaching, and take your game to the next level
                    </p>
                </div>
            </div>

        </section>
    )
};

export default FacilitiesSection;
