import React from "react";
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface PageButtonProps {
    direction?: 'right' | 'left';
    onClick?: () => void;
}

const PageButton: React.FC<PageButtonProps> = ({ direction = 'right', onClick = () => {} }) => {
    return (
        <button
            className=""
            onClick={onClick}
        >
            { direction === "right" ? (<ArrowRight color="gray"/>) : (<ArrowLeft color="gray"/>)}
        </button>
    )
};

export default PageButton;
