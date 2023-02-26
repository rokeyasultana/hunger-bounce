import React from 'react';
import { Link } from 'react-router-dom';

const Lunch = ({lunch}) => {
	const{_id} = lunch;
    return (
        <div>
             <div class="containerCard ">
			<div class="cardArticle">
				<div class="content">
					<div class="imgBx">
						<img src={lunch.img}/>
					</div>
					<div class="contentBx">
						<h3><br/><span className='text-xl font-semibold'>{lunch.name}  </span></h3>
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
						<p>Price: ${lunch.price}</p>
					</li>
					
				</ul>
			</div>
        </div>
        </div>
    );
};

export default Lunch;