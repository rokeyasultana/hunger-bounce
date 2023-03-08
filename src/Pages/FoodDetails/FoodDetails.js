import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AddToCartModal from './AddToCartModal/AddToCartModal';


const FoodDetails = () => {

    const detail = useLoaderData();
    // console.log(detail);
    // const [food,setFood] = useState(null);

   
const {  _id, img, price, name, details } = detail;
const [addToCart,setAddToCart] = useState(null);

    return (
        <div>
 
                 <div className="flex items-center justify-center h-screen mt-11 text-red-500 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img style={{height: "390px"}} src={img} className="max-w-sm rounded-full  shadow-2xl"  alt=''/>
    <div>
      <h1 className="text-4xl font-semibold">{name}</h1>
      <p className="py-6 text-left mt-4 text-xl">{details}</p>
     
     <div className='flex'>
     <div>
     <p className="py-6 text-red-500 text-3xl font-semibold text-left"> Price: ${price}</p>
     </div>
   
     </div>
     
   
      <div className=' flex items-start '>

 <label  onClick={() =>  setAddToCart(detail)} htmlFor="add-to-cart" className=" btn btn-outline text-red-500 normal-case"> Add to cart</label>
     </div>
   
    </div>
  </div>
</div>
      {
       addToCart &&
        <AddToCartModal
        addToCart={addToCart }
        setAddToCart ={setAddToCart}>
      </AddToCartModal>
      
      }
 


        </div>
    );
};

export default FoodDetails;