import React from 'react';

const Lunch = ({lunch}) => {
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