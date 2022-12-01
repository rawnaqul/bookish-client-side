import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Advertised from '../../ProductList/Advertised';
import Banner from './Banner';
import Categories from './Categories';
import Contact from './Contact';

const Home = () => {

    const categories = useLoaderData();
    return (
        <div className=''>
            <section className='background-image lg:bg-cover'>
                <Banner></Banner>
            </section>

            <br />
            <div className='container mx-auto my-24'>
                <h2 className='text-5xl font-semibold text-center font-serif'>Browse Product Categories</h2>
                <br />
                <Categories
                    categories={categories}
                ></Categories>
            </div>

            <br />
            <div className='container mx-auto my-24'>
                <h2 className='text-5xl font-semibold text-center font-serif'>Our Featured Items!</h2>
                <br />
                <Advertised></Advertised>
            </div>

            <br />

            {/* Contact starts */}
            <section id='cta-sec'>
                <Contact></Contact>
            </section>
        </div>
    );
};

export default Home;