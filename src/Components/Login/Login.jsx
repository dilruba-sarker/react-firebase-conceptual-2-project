import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
const {signInWithEmalPass,user,setUser }=useContext(AuthContext)
const [error,setError]=useState()
const [success,setSuccess]=useState()
const location=useLocation()
console.log(location);
const navigate=useNavigate()

const handleSubmit=e=>{
    e.preventDefault();
   
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    signInWithEmalPass(email,password)
    .then((result)=>{
console.log("object",result.user);
const user=result.user
e.target.reset()
setUser(user)
// jodi location er state thake tobe oi tai na thakle home e jabe
// navigate(location?.state? location.state : "/")
navigate(location?.state ? location.state : "/")
 alert("successfully login")

    })
    .catch(err=>{
      console.log(err.message);
      // alert(err.message)
      setError(err.message)
    })
}



    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit}  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"
                name='email'
                 placeholder="email"
                  className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"
                name='password'
                 placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              {error? <p className='text-red-600'>{error} </p>:" "}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>Are You New In This site <Link className='text-red-600 text0xl' to="/register">Register</Link> </p>

            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;