import React from "react";
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface PageButtonProps {
    direction?: 'right' | 'left';
    className?: string;
    onClick?: () => void;
}

const PageButton: React.FC<PageButtonProps> = ({ direction = 'right', className = '', onClick = () => {} }) => {
    return (
        <button
            className={`border border-gray-400 rounded-full ${className}`}
            onClick={onClick}
        >
            { direction === "right" ? (<ArrowRight color="gray"/>) : (<ArrowLeft color="gray"/>)}
        </button>
    )
};

export default PageButton;
