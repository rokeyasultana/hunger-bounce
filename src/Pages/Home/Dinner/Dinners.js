import React, { useEffect, useState } from 'react';
import Dinner from '../Dinner/Dinner'
const Dinners = () => {
    const[dinners,setDinners] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/dinner')
        .then(res=>res.json())
        .then(data => setDinners(data));
    },[]);
    return (
        <div>
<div>
    <h2 className='text-red-400 text-2xl text-center font-serif mt-9'>Here is our thai dinner menu</h2>
    <p  className='text-red-400 text-xl text-center font-serif mt-3'>Choose what you want</p>
</div>


                     <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
           {
               dinners.map(dinner => <Dinner
                dinner = {dinner}
               >
               
                </Dinner>)
            }
           </div>
        </div>
    );
};

export default Dinners;