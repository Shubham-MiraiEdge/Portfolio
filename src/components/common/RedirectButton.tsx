import React from 'react';
import { ArrowUpRight } from "lucide-react";

interface RedirectButtonProps {
    title?: String;
    dark?: boolean;
    onclick?: () => void;
}

const RedirectButton: React.FC<RedirectButtonProps> = ({ title, dark, onclick }) => {
    return (
        <>
            <div>
                <button 
                    className={`${dark ? 'bg-black text-white' : 'bg-white text-black'} box-border text-base font-normal p-5 rounded-full hover:border`}
                    onClick={onclick}
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
