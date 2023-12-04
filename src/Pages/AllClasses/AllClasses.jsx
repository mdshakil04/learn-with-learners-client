import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import AllClass from './AllClass';

const AllClasses = () => {
    const [allClass, setAllClass] = useState([]);
    useEffect(() =>{
        fetch("https://learn-with-learners-server.vercel.app/class")
        .then(res => res.json())
        .then(data => setAllClass(data))
    },[]);
    
    return (
        <div className=' pt-24'>
            <SectionTitle
                heading={'Our all Classes'}
            >
            </SectionTitle>
            <div className=' container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {
                    allClass.map((allClass) => <AllClass
                        key={allClass._id}
                        allClass={allClass}
                    ></AllClass>)
                }
            </div>
        </div>
    );
};

export default AllClasses;