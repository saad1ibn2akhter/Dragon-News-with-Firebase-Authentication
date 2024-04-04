import React from 'react';
import Header from '../../shared/Header/Header';
import Navbar from '../../shared/Navbar/Navbar';
import RightSideNav from '../../shared/rightSideNav/RightSideNav';
import { useParams } from 'react-router-dom';

const News = () => {
    const {id} = useParams();

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid grid-cols-4'>  
                <div className='col-span-3'>
                    <h1>News details are shown here</h1>
                    <p>{id}</p>
                </div>

                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;