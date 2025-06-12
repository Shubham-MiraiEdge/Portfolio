import React from 'react';

interface InputFieldProps {
    type?: string
    placeholder?: string
}

const InputField: React.FC<InputFieldProps> = ({ type = 'text', placeholder = '' }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="w-full px-10 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
    )
};

export default InputField;
