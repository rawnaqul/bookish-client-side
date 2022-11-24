import React from 'react';
import Banner from './Banner';
import Contact from './Contact';

const Home = () => {
    return (
        <div className=''>
            <section className='background-image lg:bg-cover'>
                <Banner></Banner>
            </section>

            <br />

            {/* Contact starts */}
            <section>
                <Contact></Contact>
            </section>
        </div>
    );
};

export default Home;