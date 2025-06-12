import React from 'react';

interface MainButtonProps {
    title?: string;
    dark?: boolean;
    isActive?: boolean;
    onClick?: () => void;
  }

const MainButton: React.FC<MainButtonProps> = ({ title, dark, isActive, onClick }) => {
    return (
        <>
            <div>
                <button
                    className={`${dark ? 'text-black border-gray-500' : 'text-white border-white'} ${isActive ? 'bg-[#AEE5FF]' : "bg-transparent"} text-base font-normal border rounded-full p-3`}
                    onClick={onClick}
                >
                    {title}
                </button>
            </div>
        </>
    )
};

export default MainButton;
