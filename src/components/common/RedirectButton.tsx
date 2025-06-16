import React from 'react';
import { ArrowUpRight } from "lucide-react";

interface RedirectButtonProps {
    title?: string;
    dark?: boolean;
    className?: string;
    onClick?: () => void;
}

const RedirectButton: React.FC<RedirectButtonProps> = ({ title = '', className = '', onClick = () => {} }) => {
    return (
        <button
            className={`cursor-pointer rounded-full ${className}`}
            onClick={onClick}
        >
            <div className="flex items-center gap-4">
                {title ? (<p>{title}</p>) : null}
                <ArrowUpRight />
            </div>
        </button>
    )
};

export default RedirectButton;
