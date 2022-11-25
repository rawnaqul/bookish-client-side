import React from 'react';
import PrimaryButton from '../../../Components/Buttons/PrimaryButton';
import './Home.css';

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className="lg:flex lg:flex-row-reverse px-3 lg:h-screen lg:mb-0 lg:mt-0 rounded-xl mb-20">

                <div className='lg:w-1/2 my-auto rounded-xl'>
                    <img className='rounded-xl opacity-75' src="https://i.postimg.cc/cCZtgT0q/pexels-pixabay-159618.jpg" alt="" />
                </div>
                <div className='my-auto mr-auto'>
                    <h1 className='font-bold text-4xl lg:text-7xl lg:leading-[70px] mt-5 text-primary font-serif'>Never Stop Reading</h1>
                    <h2 className='lg:my-8 my-4 text-white lg:text-xl '>A home for those who love to read books and sell their old books.</h2>
                    <p className='text-white w-96 '>Buying a book is similar to shopping for a bibliomaniac and used books may cost you only half the rate of new books. By buying them, you may cut costs and buy more books with your saved money. Unlike the cozy, shiny book shops, you have the option to bargain in second-hand shops. You can showcase all your negotiating talent and buy as many books as possible.
                    </p>
                    <br />
                    <PrimaryButton>Buy Now</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;