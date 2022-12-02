import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='container mx-auto'>
            <div class="error">404</div>
            <br /><br />
            <span class="info">File not found</span>
            <img src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif" class="static" />
        </div>
    );
};

export default NotFound;