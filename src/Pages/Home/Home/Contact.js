import React from 'react';
import PrimaryButton from '../../../Components/Buttons/PrimaryButton';
import './Home.css'

const Contact = () => {
    return (
        <div className='background-image-cta bg-no-repeat bg-cover p-24 mt-[65px]'>
            <div className='container mx-auto text-center border-4 border-white p-24'>
                <div className='my-auto mb-10' >
                    <h4 className='font-bold text-2xl text-orange-600 mb-5 font-serif'>Contact Us</h4>
                    <h2 className='font-bold text-3xl lg:text-4xl text-black font-serif'>Stay connected with us!</h2>
                </div>
                <div className='flex flex-col lg:w-4/12 w-10/12 mx-auto mb-5'>
                    <input type="email" placeholder="Type your email here" className="input w-ful " />
                    <input type="text" placeholder="Type your subject here" className="input w-full my-3" />
                    <textarea className="textarea h-32" placeholder="Type your message here"></textarea>
                </div>
                <PrimaryButton>Subscribe</PrimaryButton>
            </div>
        </div>
    );
};

export default Contact;