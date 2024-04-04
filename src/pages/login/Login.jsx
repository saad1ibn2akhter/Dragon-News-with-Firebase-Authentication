import React, { useContext } from 'react';
// import Navba
import Navbar from '../../shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {logInUser} = useContext(AuthContext);
    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        logInUser(email,password)
        .then(res => console.log('user logged in succesfuly !'))
        .catch(error => console.error(error))
        

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200 font-poppins">
                <div className="hero-content flex-col ">

                    <div className="card shrink-0  w-[523px] shadow-2xl bg-base-100 p-6">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="text-center text-sm ">
                                <h1 className="text-[36px] font-bold">Login to your account</h1>
                            </div> <br /><hr />
                           
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" placeholder="Your email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Password</span>
                                </label>
                                <input type="password" placeholder="Your password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                           
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            
                            <Link to='/Register' >Don't have an account ? <span className='link link-secondary tet-sm'>Register</span> </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;