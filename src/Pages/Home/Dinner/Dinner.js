import React from 'react';

const Dinner = ({dinner}) => {
    return (
        <div>
               <div class="containerCard ">
			<div class="cardArticle">
				<div class="content">
					<div class="imgBx">
						<img src={dinner.img}/>
					</div>
					<div class="contentBx">
						<h3><br/><span className='text-xl font-semibold'>{dinner.name}  </span></h3>
					</div>
				</div>
				<ul class="sci">
					<li >
						<p>Price: ${dinner.price}</p>
					</li>
					
				</ul>
			</div>
        </div> 
        </div>
    );
};

export default Dinner;