import React from 'react';

import InputField from "../common/InputField";
import SubmitButton from "../common/SubmitButton";

const GetInTouchForm: React.FC = () => {
    return (
        <div className="w-full max-w-md space-y-6">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 text-center lg:text-left">Get in Touch</h2>
            <p className="text-gray-600 text-center lg:text-left">
                Reach out and we’ll get in touch within 24 hours.
            </p>
            <form className="space-y-4">
                <InputField type='text' placeholder='Full Name' />
                <InputField type='email' placeholder='Email Address' />
                <InputField type='tel' placeholder='Phone Number' />
                <SubmitButton title="SUBMIT" />
            </form>
        </div>
    )
};

export default GetInTouchForm;
