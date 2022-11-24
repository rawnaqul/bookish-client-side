import React, { useState } from 'react';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import heroBanner from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css'
import DisplaySchedule from './DisplaySchedule';

const AppointmentMain = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div className='container mx-auto'>
            <p className='text-6xl my-16 text-center'>
                a p p o i n t m e n t s
            </p>
            <div className="lg:flex lg:flex-row-reverse px-3 lg:h-screen mt-20 mb-10 lg:mb-0 lg:mt-0 background-image lg:bg-cover">

                <div className='my-auto pr-10 w-1/2'>
                    <h1 className='font-bold text-4xl lg:text-6xl lg:leading-[70px] mt-5 text-accent'>Your New Smile Starts Here</h1>
                    <p className='lg:my-8 my-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
                <div className='lg:w-1/2 my-auto'>
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                    />
                </div>
            </div>
            <div>
                <DisplaySchedule
                    selected={selected}
                ></DisplaySchedule>
            </div>
        </div>
    );
};

export default AppointmentMain;