import React from 'react';

const Details = ({detail}) => {
    return (
        <div>
                        <div className="flex items-center justify-center h-screen mt-11 text-red-500 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img style={{height: "390px"}} src={detail.img} className="max-w-sm rounded-full  shadow-2xl"  alt=''/>
    <div>
      <h1 className="text-4xl font-semibold">{detail.name}</h1>
      <p className="py-6 text-left mt-4 text-xl">{detail.details}</p>
     
     <div className='flex'>
     <div>
     <p className="py-6 text-red-500 text-3xl font-semibold text-left"> Price: ${detail.price}</p>
     </div>
   
     </div>
     
   
      <div className=' flex items-start '>

 <label htmlFor="add-to-cart" className=" btn btn-outline text-red-500 normal-case"> Add to cart</label>
     </div>
   
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;