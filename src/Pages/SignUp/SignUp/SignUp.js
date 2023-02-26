import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvide/AuthProvider';
import './SignUp.css'


const SignUp = () => {
  
  
const [error,setError] =useState('')
  const {  createUser, updateUserProfile } =
  useContext(AuthContext);

const navigate = useNavigate();

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const photoURL = form.photoURL.value;
  const email = form.email.value;
  const password = form.password.value;
  createUser(email, password)
    .then((result) => {
      form.reset();
      setError('')
      profileUpdate(name,photoURL);
      navigate("/");
    })
    .catch((error) => {
      console.error(error);
    setError(error.message)
    
    });
};



const profileUpdate = (name, photoURL) => {
    updateUserProfile(name, photoURL)
      .then(() => {})
      .catch((error) => console.error(error));
  };
    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="1500" >
  <div >

    <div data-aos="fade-up" data-aos-duration="1500" class="flex mx-auto mt-6 card w-96  rounded shadow-xl">
   

<div  class="card-body signUp ">
<h2 className='text-left text-3xl mt-5 mb-5 font-semibold text-red-500'>Sign Up</h2>
        <form onSubmit={handleSubmit} >

        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>

          </label>
          <input name='name' type="text" placeholder="Your name" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Photo Url</span>

          </label>
          <input name='photoURL' type="text" placeholder="Photo Url" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input name='email' type="text" placeholder="Email" class="input input-bordered" required />
        </div>
        
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input name='password' type="text" placeholder="Password" class="input input-bordered" required/>
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        
        
        <div class="form-control mt-6 ">
          <button  type='submit' class="btn btn-outline text-red-500 hover:btn-error  normal-case ">Sign Up</button>
        </div>
        </form>
        <p className='text-red-500'>{error}</p>
        <small>Already have an account?<Link to='/SignIn'><span className='text-red-500'> Please Sign In</span></Link></small>
      </div>
</div>

   
    </div>
  </div>  
        </div>
    );
};

export default SignUp;