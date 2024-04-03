import React from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        console.log(name,photo,email,password);

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200 font-poppins">
                <div className="hero-content flex-col ">

                    <div className="card shrink-0  w-[523px] shadow-2xl bg-base-100 p-6">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="text-center text-sm ">
                                <h1 className="text-[36px] font-bold">Login to your account</h1>
                            </div> <br /><hr />
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name </span>
                                </label>
                                <input type="text" placeholder="Your Name " name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Photo URL</span>
                                </label>
                                <input type="text" placeholder="Your Photo " name='photo' className="input input-bordered" />
                            </div>
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
                            <div className='flex space-x-2'>
                                
                                <input type="checkbox" name="" id="" />
                                <label className="label">
                                    <span className="label-text">Please accept our terms an conditions</span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button  className="btn btn-primary">Register</button>
                            </div>
                            <Link to='/Login' >Already have an account ? <span className='link link-secondary tet-sm'>Login</span> </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;