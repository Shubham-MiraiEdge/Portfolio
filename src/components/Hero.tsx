import heroIMG from "../assets/hero_img.png";
import MainButton from "./common/MainButton";
import EllipsImageSection from "./EllipsImageSection";

const Hero: React.FC = () => {
  return (
    <>
      <section
        className="h-screen bg-cover bg-center flex items-center text-white relative"
        style={{
          backgroundImage: `url(${heroIMG})`
        }}
      >
        <div className="p-6 max-w-xl">
          <div className="mb-5">
            <MainButton title="Sport Center"/>
          </div>
          <p className="text-5xl md:text-5xl font-light">
            Your Play, Your Way- Modern Sports Facilities for Every Passion
          </p>
        </div>
        <EllipsImageSection />
      </section>
    </>
  );
};

export default Hero;
  