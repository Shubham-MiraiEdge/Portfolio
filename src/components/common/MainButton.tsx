import React from 'react';

interface MainButtonProps {
    title?: String;
    dark?: boolean;
    onclick?: () => void;
  }

const MainButton: React.FC<MainButtonProps> = ({ title, dark, onclick }) => {
    return (
        <>
            <div>
                <button
                    className={`${dark ? 'text-black border-gray-500' : 'text-white border-white'} text-base font-normal border rounded-full p-3`}
                    onClick={onclick}
                >
                    {title}
                </button>
            </div>
        </>
    )
};

export default MainButton;
