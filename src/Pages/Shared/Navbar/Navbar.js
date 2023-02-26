import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png';
import { AuthContext } from '../../contexts/AuthProvide/AuthProvider';
import { FaUser } from 'react-icons/fa';
const Navbar = () => {
    
    const {user,logOut} = useContext(AuthContext);
    
   

    const handleLogOut = () => {
     logOut()
          .then(() => { })
          .catch(error => console.error(error))
  }
    const menuItems = <>
   
    <li className='hover:underline hover:text-slate-500 hover:font-semibold'><Link to="/">Home</Link></li>
    { 
    user && <>
  
  <li className='hover:underline hover:text-slate-500 hover:font-semibold'><Link to="/">Cart</Link></li>
                       
 </>
   }     
 
    <li className='hover:underline hover:text-slate-500 hover:font-semibold'><Link to="/SignUp">Sign Up</Link></li>
 
  
         
    <li>{user?.uid ?
                                <img className='rounded-full gap-3'
                                title={user?.displayName}
                              style={{width: '70px'}}
                                    src={user?.photoURL} alt=''>
                                </img>
                                : <div><FaUser color="slate" fontSize="1.5em"/></div>
                            }
          </li>
    <li className=' hover:underline hover:text-slate-500 hover:font-semibold'>{user?.uid?  <button onClick={handleLogOut} class="btn btn-ghost mt-1 normal-case">
    
 Sign out</button> :<Link to="/SignIn">Sign in</Link>}</li>
      
                                    
 </>
    
     
    return (
        <div>
  <div>
            <div className='text-red-500 bg-black'>
             <div className="navbar ">
          <div className="navbar-start">
              <div className="dropdown">
                  <label tabIndex="0" className="btn btn-ghost   lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-sky-300 text-white rounded-box w-52">
                      {menuItems}
                  </ul>
              </div>
              <img className='ml-10' style={{height: "40px"}} src={logo} alt="" />
        
          </div>
          <div className="navbar-center hidden lg:flex ml-20">
              <ul className="menu menu-horizontal p-0 ">
                  {menuItems}
              </ul>
          </div>
      </div>
        </div>
        </div>


        </div>
    );
};

export default Navbar;