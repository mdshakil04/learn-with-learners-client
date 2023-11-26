
import React from 'react';

const SectionTitle = ({heading}) => {
    return (
        <div className=' md:w-1/2 mx-auto mb-4'>
            <h3 className=' text-sky-700 border-y-4 py-4 text-center text-5xl uppercase'>---{heading}---</h3>
        </div>
    );
};

export default SectionTitle;