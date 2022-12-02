import React from 'react';

const Loader = () => {
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-dashed rounded-full" role="status"></div>
            </div>
        </div>
    );
};

export default Loader;