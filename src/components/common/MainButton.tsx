import React from 'react';

interface MainButtonProps {
    title?: String;
    dark?: boolean;
    onClick?: () => void;
  }

const MainButton: React.FC<MainButtonProps> = ({ title, dark, onClick }) => {
    return (
        <>
            <div>
                <button
                    className={`${dark ? 'text-black border-gray-500' : 'text-white border-white'} text-base font-normal border rounded-full p-3`}
                    onClick={onClick}
                >
                    {title}
                </button>
            </div>
        </>
    )
};

export default MainButton;
