import MainButton from "@components/common/MainButton";
import EllipseImageSection from "@components/EllipseImageSection";
import heroIMG from "@assets/hero_img.png";

const Hero: React.FC = () => {
    return (
      <section
        className="h-[843px] bg-cover bg-center text-white relative flex items-center px-6"
        style={{
          backgroundImage: `url(${heroIMG})`,
        }}
      >
        <div className="max-w-xl z-10 mt-50 md:mt-0">
          <div className="mb-5">
            <MainButton title="Sport Center" className="px-[18px] py-[23px]"/>
          </div>
          <p className="text-4xl md:text-5xl font-light leading-snug">
            Your Play, Your Way - Modern Sports Facilities for Every Passion
          </p>
  
          <div className="block md:hidden mt-8">
            <EllipseImageSection />
          </div>
        </div>
  
        <div className="hidden md:block absolute bottom-45 right-0">
          <EllipseImageSection />
        </div>
      </section>
    );
};

export default Hero;
