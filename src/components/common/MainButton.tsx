import React from 'react';

interface MainButtonProps {
    title?: string;
    className?: string;
    onClick?: () => void;
}

const MainButton: React.FC<MainButtonProps> = ({ title = '', className = '', onClick = () => {} }) => {
    return (
        <button
            className={`text-sm font-medium border rounded-full ${className}`}
            onClick={onClick}
        >
            {title}
        </button>
    )
};

export default MainButton;
