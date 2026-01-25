import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {asyncupdateuser} from "../../store/actions/userActions"

const Cart = () => {
   const dispatch = useDispatch();
  const users = useSelector((state)=> state.userReducer.users);
  const products = useSelector((state)=> state.productReducer.products);
  

const IncreaseQuantityHandler = (index) => {
  const copyuser = { ...users, cart: [...users.cart] };

  copyuser.cart[index] = {
    ...copyuser.cart[index],
    quantity: copyuser.cart[index].quantity + 1,
  };

  dispatch(asyncupdateuser(copyuser.id, copyuser));
};

const DecreaseQuantityHandler = (index) => {
  const copyuser = { ...users, cart: [...users.cart] };

  if (copyuser.cart[index].quantity > 1) {
    copyuser.cart[index] = {
      ...copyuser.cart[index],
      quantity: copyuser.cart[index].quantity - 1,
    };
  } else {
    copyuser.cart.splice(index, 1);
  }

  dispatch(asyncupdateuser(copyuser.id, copyuser));
};

  if (!users || !users.cart || users.cart.length === 0) {
    return <p>Your cart is empty</p>;
  }

  const cartItems = users.cart.map((c, index) => (
    <li className='flex items-center justify-between' key={c.product.id}>
      <img className='w-[7vmax] h-[7vmax] object-cover' src={c.product.image} alt={c.product.title} />
      <span>{c.product.title}</span>
      <span>{c.product.price * c.quantity}</span>
      <p>
        <button onClick={() => DecreaseQuantityHandler(index)}>-</button>
        <span className='mx-3'>{c.quantity}</span>
        <button onClick={() => IncreaseQuantityHandler(index)}>+</button>
      </p>
    </li>
  ));

  return <ul>{cartItems}</ul>
}

export default Cart
