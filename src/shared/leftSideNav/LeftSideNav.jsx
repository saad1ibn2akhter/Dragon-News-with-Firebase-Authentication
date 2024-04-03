import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories ,setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(ata => setCategories(ata))
    },[])
    return (
        <div>
            <h1>All Categories</h1>
            {
                categories.map(category => 
                <Link 
                    className='ml-4 block text-xl font-semibold'
                    key={category.id}>
                        {category.name}
                </Link>)
            }
        </div>
    );
};

export default LeftSideNav;