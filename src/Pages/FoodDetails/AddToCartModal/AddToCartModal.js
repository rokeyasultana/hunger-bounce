import React, { useContext } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvide/AuthProvider';

const AddToCartModal = ({  addToCart,setAddToCart}) => {
    const {user} = useContext(AuthContext);
    // console.log(addToCart.price);
    const handleBooking = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const item = form.item.value;
      const price = form.price.value;
      const email = form.email.value;
      const phone = form.phone.value;
      const location = form.location.value;
      

const orders = {name,email,item,price,phone,location};



fetch('https://food-delivery-website-server.vercel.app/orders', {
  method: 'POST',
  headers: {
      'content-type':'application/json'
  },
  body: JSON.stringify(orders)
})
  .then(res => res.json())
  .then(data => {
      console.log(data);
      if (data.acknowledged) {
          setAddToCart(null);
          toast.success('Ordered confirmed!')
      } 
      else{
          toast.error(data.message);
      }
  })

         }
 
    
    return ( 
        <>
          <input type="checkbox" id="add-to-cart" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="add-to-cart" className="btn btn-sm btn-circle absolute right-2 top-2 text-red-400">✕</label>
    <form onSubmit={handleBooking}>
    <label className="label">
    <span className="label-text text-red-500">Your Name</span>
   
  </label>
 
    <input name="name" type="text" className="input w-full input-bordered mb-3 mt-3 border-red-500" defaultValue={user.displayName} disabled/>
    <label className="label">
    <span className="label-text text-red-500">Your Email</span>
    </label>
    <input name="email" type="text"  className="input w-full input-bordered mb-3 mt-3 border-red-500" defaultValue={user.email} disabled/>
    <label className="label">
    <span className="label-text text-red-500" >Item</span>
    </label>
    <input name="item" type="text"  className="input w-full input-bordered mb-3 mt-3 border-red-500" defaultValue={addToCart.name} disabled/>
    <label className="label">
    <span className="label-text text-red-500">Price</span>
    </label>
    <input name="price" type="text"  className="input w-full input-bordered mb-3 mt-3 border-red-500" defaultValue={addToCart.price} disabled/>

    <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered mb-3 mt-3 border-red-500" />
                        <input name="location" type="text" placeholder=" Your Location" className="input w-full input-bordered border-red-500" />
                      
  
    <input className='btn btn-outline w-full text-red-500 mt-3 normal-case' type="submit" value="Place Oder" />



    </form>
  </div>
  
  <Toaster/>
</div>  
        </>
    );
};

export default AddToCartModal;