import React from 'react';

interface SubmitButtonProps {
    title?: string;
    onClick?: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ title = '', onClick = () => {} }) => {
    return (
        <button
            className="w-full cursor-pointer py-3 rounded-full bg-sky-300 text-black font-medium shadow-md hover:bg-sky-400 transition"
            type="submit"
            onClick={onClick}
        >
            {title}
        </button>
    )
};

export default SubmitButton;
