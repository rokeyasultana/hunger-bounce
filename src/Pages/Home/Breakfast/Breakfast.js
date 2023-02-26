import React from 'react';
import { Link } from 'react-router-dom';
import './Breakfast.css'
const Breakfast = ({breakfast}) => {
	const{_id} = breakfast;
    return (
        <div>
             <div className=''>
         
		 
		 <div class="containerCard ">
			<div class="cardArticle">
				<div class="content">
					<div class="imgBx">
						<img src={breakfast.img}/>
					</div>
					<div class="contentBx">
						<h3><br/><span className='text-xl font-semibold'>{breakfast.name}  </span></h3>
						
						<Link to={`/details/${_id}`} class="card-actions ">
     <div className='text-center mx-auto'>
	 <button 
      class="btn btn-outline text-red-500 normal-case mt-3 hover:btn-error hover:text-white mb-9">Add to Cart</button>
	 </div>
    </Link>
					
					</div>
				</div>
				<ul class="sci">
					<li >
						<p>Price: ${breakfast.price}</p>
					</li>
					
				</ul>
			</div>
        </div>
		 
	
        </div>
        </div>
    );
};

export default Breakfast;