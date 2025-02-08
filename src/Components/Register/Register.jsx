import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
const {createUser ,user,setUser, updateProfiledata}=useContext(AuthContext)
const[success,setSuccess]=useState('')
const[error,setError]=useState('')
const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const name=e.target.name.value;
       
        const email=e.target.email.value;
        const photo=e.target.photo.value;
        const password=e.target.password.value;
        console.log(name,email,photo,password);
        // Clear previous error & success 
setSuccess(' ')
setError('')
// password validation
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
if(!regex.test(password)){
setError("Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.")
return
}
        createUser(email,password)
        .then((result)=>{
            console.log("object",result.user);
            setUser(user)
            setSuccess("Successfully Sign up done")
            e.target.reset()
            updateProfiledata({
              displayName:name,
              photoURL:photo
              }).then(()=>{
                navigate('/')
              }).catch(err=>console.log(err.message))
        }).catch(
            err=>{
                console.log(err.message);
                setError(err.message)
            }
        )
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={ handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text"
                name='name'
                 placeholder="your name"
                  className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text"
                name='photo'
                 placeholder="photo url"
                  className="input input-bordered" required />
              </div>
              <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"
          name='email'
          placeholder="email" className="input input-bordered" required />
        </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"
                name='password'
                 placeholder="password" 
                 className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              {success&& <p className='text-green-700'>{success}</p>}
              {error && <p className="text-red-500">{error}</p>}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>Already have an Account <Link className='text-red-500 text-xl' to="/login">Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;