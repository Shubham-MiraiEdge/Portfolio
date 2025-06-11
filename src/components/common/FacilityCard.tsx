import RedirectButton from "./RedirectButton";

interface FacilityCardProps {
    title: string;
    description: string;
    imgUrl: string;
    redirectIcon: boolean;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ title, description, imgUrl, redirectIcon=false }) => {
    return (
        <div
            className="relative w-full h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] rounded-2xl overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${imgUrl})` }}
        >
            <div className="absolute top-4 left-4 bg-white/20 backdrop-blur text-white px-4 py-1 rounded-full border border-white text-sm">
                {title}
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-black/40 text-white p-4 rounded-xl flex justify-between items-center gap-2">
                <p className="text-base leading-tight">
                    {description}
                </p>
                {redirectIcon && (<RedirectButton dark={true} />)}
            </div>
        </div>
    )
};

export default FacilityCard
