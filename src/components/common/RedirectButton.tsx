import React from 'react';
import { ArrowUpRight } from "lucide-react";

interface RedirectButtonProps {
    title?: String;
    dark?: boolean;
    onClick?: () => void;
}

const RedirectButton: React.FC<RedirectButtonProps> = ({ title, dark, onClick }) => {
    return (
        <>
            <div>
                <button 
                    className={`${dark ? 'bg-black text-white' : 'bg-white text-black'} box-border text-base font-normal p-5 rounded-full hover:border`}
                    onClick={onClick}
                    >
                    <div className="flex items-center gap-4">
                        {title ? (<p>{title}</p>) : null}
                        <ArrowUpRight />
                    </div>
                </button>
            </div>
        </>
    )
};

export default RedirectButton;
