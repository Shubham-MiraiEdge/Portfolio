import RedirectButton from "@components/common/RedirectButton";

interface FacilityCardProps {
    title: string;
    description: string;
    imgUrl: string;
    redirectIcon: boolean;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ title, description, imgUrl, redirectIcon=false }) => {
    return (
        <div
            className="relative w-full h-[450px] sm:h-[500px] md:h-[525px] rounded-2xl overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${imgUrl})` }}
        >
            <div className="absolute top-[10px] left-[12px] bg-white/20 backdrop-blur text-white px-[10px] py-[10px] rounded-full border border-white text-base">
                {title}
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-black/40 text-white p-4 rounded-xl flex justify-between items-center gap-2">
                <p className="text-lg leading-tight">
                    {description}
                </p>
                {redirectIcon && (<RedirectButton className="bg-black text-white p-3" />)}
            </div>
        </div>
    )
};

export default FacilityCard
