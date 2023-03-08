import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvide/AuthProvider';
import Loading from '../../Shared/Loading/Loading';


const SignIn = () => {


    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState(null);
   
  
    const {providerLogin, logInWithEmailPassword,loading} = useContext(AuthContext)
  
    if(loading){
      return<Loading></Loading>
    }
    const from = location.state?.from?.pathname || "/";
  
      const googleProvider = new GoogleAuthProvider()
  
  const handleGoogleSignIn = ()=> {
  providerLogin(googleProvider)
  .then(result =>{
    navigate(from, { replace: true });
  })
  .catch(error => {console.error(error)
    setError(error.message);
  });
  
  };
  
      const handleSubmit = event =>{
  
        event.preventDefault();
        setError(null);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logInWithEmailPassword(email, password)
          .then((result) => {
            setError(null);
            form.reset();
            setError('')
            navigate(from, { replace: true });
          })
          .catch((error) => setError(error.message));
      }
  
    return (
        <div>
              <div>
            <div>
   
   </div>

            <div  class="card w-96  mx-auto mt-24 mb-24  shadow-xl  ">
         
  <div  class="card-body signUp">
  <h2 className='text-left text-3xl mt-5 mb-5 font-semibold text-red-500'>Sign In</h2>
  <form onSubmit={handleSubmit} className='' >
      <div >
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input name='email' type="text" placeholder="Email" class="input input-bordered"  required/>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input name='password' type="text" placeholder="Password" class="input input-bordered" required />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button type='submit' class="btn btn-outline text-red-500 hover:btn-error  normal-case ">Sign in</button>
        </div>
        <div className='text-center mt-5 mb-3'>
   <button  onClick={handleGoogleSignIn} class="btn btn-outline text-red-500 hover:btn-error normal-case w-full ">Google Sign Up</button>
   </div>
        <small>Don't you have account? <Link to='/signUp'><span className='text-red-500 '>Please Sign Up</span></Link></small>
       
      </div>
      <p className='text-red-500'>{error}</p>
     
    </form>
  </div>
</div>


   

  </div> 
        </div>
    );
};

export default SignIn;