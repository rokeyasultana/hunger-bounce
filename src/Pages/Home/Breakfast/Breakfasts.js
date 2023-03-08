import React, { useEffect, useState } from 'react';
import AddToCartModal from '../../FoodDetails/AddToCartModal/AddToCartModal';
import Breakfast from './Breakfast';

const Breakfasts = () => {
    const[breakfasts,setBreakfasts] = useState([]);
    const [addToCart,setAddToCart] = useState(null);
useEffect(()=>{
    fetch('https://food-delivery-website-server.vercel.app/breakfast')
    .then(res=>res.json())
    .then(data => setBreakfasts(data));
},[]);
    return (
        <div>
<div>
    <h2 className='text-red-400 text-2xl text-center font-serif mt-9'>Here is our thai breakfast menu</h2>
    <p  className='text-red-400 text-xl text-center font-serif mt-3'>Choose what you want</p>
</div>

 
           <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
           {
                breakfasts.map(breakfast =><Breakfast
                
                key={breakfast._id}
                breakfast ={breakfast}
                ></Breakfast>)
            }
           </div>
         
        </div>
    );
};

export default Breakfasts;