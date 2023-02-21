import React from 'react';
import './Breakfast.css'
const Breakfast = ({breakfast}) => {
    return (
        <div>
             <div>
         
		 
		 <div class="containerCard ">
			<div class="cardArticle">
				<div class="content">
					<div class="imgBx">
						<img src={breakfast.img}/>
					</div>
					<div class="contentBx">
						<h3><br/><span className='text-xl font-semibold'>{breakfast.name}  </span></h3>
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