import React from 'react';
import { useLoaderData } from 'react-router-dom';
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
            <div className='container mx-auto'>
                <h2 className='text-5xl font-semibold text-center'>Browse Product Categories</h2>
                <br />
                <Categories
                    categories={categories}
                ></Categories>
            </div>

            <br />

            {/* Contact starts */}
            <section>
                <Contact></Contact>
            </section>
        </div>
    );
};

export default Home;