import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const BreakingNews = () => {
    return (
        <div className='flex space-x-1'>
            <button className='btn btn-warning'>Breaking News</button>
            <Marquee pauseOnHover={true} speed={90} className='space-x-5'>
                <Link to='/'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in ex autem fugit ipsum dignissimos nulla magnam omnis ea pariatur!    </Link>
                <Link to='/'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in ex autem fugit ipsum dignissimos nulla magnam omnis ea pariatur!    </Link>
                <Link to='/'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in ex autem fugit ipsum dignissimos nulla magnam omnis ea pariatur!    </Link>
                
            </Marquee>
        </div>
    );
};

export default BreakingNews;