import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userPhoto from '../../assets/user.png'
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const { user , logOut} = useContext(AuthContext);
    const handleSignOut = () =>{
        logOut()
        .then(res => console.log('user signed out sucesfully !'))
        .catch(error => console.error(error))
    }
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>
        <li><NavLink to='/Login'>Login</NavLink></li>
        <li><NavLink to='/Register'>Register</NavLink></li>
        <li><NavLink to='/Post'>Post</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex space-x-3 items-center'>
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={userPhoto} />
                    </div>
                    <div>
                        {
                            user ?
                                <>
                                    <Link>
                                        <button onClick={handleSignOut} className='btn'>Sign Out</button>
                                    </Link>
                                </>
                                :
                                <>
                                    <Link to='/Login'>
                                        <button className='btn'>Login</button>
                                    </Link>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;