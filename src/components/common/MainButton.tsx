import React from 'react';

interface MainButtonProps {
    title?: string;
    dark?: boolean;
    onClick?: () => void;
}

const MainButton: React.FC<MainButtonProps> = ({ title = '', dark = false, onClick = () => {} }) => {
    return (
        <button
            className={`${dark ? 'text-black border-gray-500' : 'text-white border-white'} text-base font-normal border rounded-full p-3`}
            onClick={onClick}
        >
            {title}
        </button>
    )
};

export default MainButton;
