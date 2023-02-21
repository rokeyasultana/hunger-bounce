import React, { useEffect, useState } from 'react';
import Lunch from './Lunch';

const Lunches = () => {
    const[lunches,setLunches] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/lunch')
        .then(res=>res.json())
        .then(data => setLunches(data));
    },[]);
    return (
        <div>
<div>
    <h2 className='text-red-400 text-2xl text-center font-serif mt-9'>Here is our thai lunch menu</h2>
    <p  className='text-red-400 text-xl text-center font-serif mt-3'>Choose what you want</p>
</div>


                   <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
           {
               lunches.map(lunch => <Lunch
                key={lunch._id}
                lunch={lunch}
               >
               
                </Lunch>)
            }
           </div>
        </div>
    );
};

export default Lunches;