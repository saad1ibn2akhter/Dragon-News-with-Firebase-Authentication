import React from 'react';
import Header from '../../shared/Header/Header';
import Navbar from '../../shared/Navbar/Navbar';
import LeftSideNav from '../../shared/leftSideNav/LeftSideNav';
import RightSideNav from '../../shared/rightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';
// import Post from './Post';


const Home = () => {
  const news = useLoaderData();
  console.log(news);
    return (
        <div className=' font-poppins '>
            <Header></Header>

            <BreakingNews></BreakingNews>

            <Navbar></Navbar>
          {/* <h1 className='text-3xl font-bold'>This is home </h1>   */}

          <div className='grid grid-cols-1 lg:grid-cols-4 gap-[24px]'>
            <div className='border'>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className='col-span-2 border'>
                <h1>News coming sooon!!</h1>
                {
                  news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                }
            </div>
            <div className='border'>
                <RightSideNav></RightSideNav>
            </div>
          </div>
          <div>
            {/* <Post></Post> */}
          </div>
        </div>
    );
};

export default Home;