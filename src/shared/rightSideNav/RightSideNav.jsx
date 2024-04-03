import React from 'react';
import {FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter} from 'react-icons/fa'
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-4'>
                <h1 className='text-2xl'>Login With</h1>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>

                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
            <div className='p-4 space-y-3 mb-4'>
                <h1 className='text-2xl'>Find Us On</h1>
                <a href="" className='flex p-2 text-lg items-center border rounded-t-lg space-x-2'>
                    <FaFacebook></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a href="" className='flex p-2 text-lg items-center border rounded-t-lg space-x-2'>
                    <FaTwitter></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a href="" className='flex p-2 text-lg items-center border rounded-t-lg space-x-2' >
                    <FaInstagram></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>
            <div className='p-4 space-y-3 mb-4'>
                <h1 className='text-2xl'>q Zone</h1>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;