'use client'
import './takeaway.css';
import { useState, useEffect } from 'react';
// Components
import Item from '../components/Item/Item';
import Cart from '../components/Cart/Cart';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid'
// Styles
import { Wrapper, StyledBadge } from './takeaway.styles';
import productData from '../data/products.json'; 
// Types
import { CartItemType } from '../types/menuTypes';

const Takeaway: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const [products, setProducts] = useState<CartItemType[]>([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  const handleClearCart = async (e: React.FormEvent<HTMLFormElement>, customerName: string) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api');
      const data = await response.json();
      const existingOrders = JSON.parse(data.data);

      const order = {
        customerName,
        items: cartItems,
      };

      existingOrders.push(order);

      await fetch('http://localhost:3001/api', {
        method: 'POST',
        body: JSON.stringify(existingOrders),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setCartItems([]);
      alert('Order submitted! Please proceed to the counter for payment.');
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Failed to submit order. Please try again.');
    }
  };

  return (
    <>
      <h1>Please add your items to the cart. When you are ready, kindly proceed to the counter for payment.</h1>
      <Wrapper>
        <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
          <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
            clearCart={handleClearCart}
          />
        </Drawer>
          <StyledBadge data-testid='cartbutton' badgeContent={getTotalItems(cartItems)} color='warning' onClick={() => setCartOpen(true)}/>
        <Grid container spacing={3}>
          {products.map(item => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </>
  );
};

export default Takeaway;