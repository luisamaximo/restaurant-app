import React, { useState } from 'react';
import CartItem from '../CartItem/CartItem';
import { StyledButton, Wrapper } from './Cart.styles';
import { CartItemType } from '../../types/menuTypes';
import { Input } from '@mui/material';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  clearCart: (e: React.FormEvent<HTMLFormElement>, customerName: string) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart, clearCart }) => {
  const [customerName, setCustomerName] = useState('');

  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerName(event.target.value);
  };

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total Sum: £{calculateTotal(cartItems).toFixed(2)}</h2>
      <Input placeholder='Your Name' value={customerName} onChange={handleInputChange} />
      <StyledButton onClick={(e) => clearCart(e as unknown as React.FormEvent<HTMLFormElement>, customerName)}>
        Check Out
      </StyledButton>
    </Wrapper>
  );
};

export default Cart;
