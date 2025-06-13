import React from "react";
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface PageButtonProps {
    side?: 'right' | 'left';
    onClick: () => void;
}

const PageButton: React.FC<PageButtonProps> = ({ side = 'right', onClick = () => {} }) => {
    return (
        <button
            className=""
            onClick={onClick}
        >
            { side === "right" ? (<ArrowRight/>) : (<ArrowLeft/>)}
        </button>
    )
};

export default PageButton;
