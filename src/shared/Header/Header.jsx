import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center space-y-2'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='capitalize'>Journalism without fear or favor</p>
            <p>
                {
                    moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
                }
            </p>
        </div>
    );
};

export default Header;