'use client'
import './takeaway.css';
import { useState, useEffect } from 'react';
// Components
import Item from '../components/Item/Item';
import Cart from '../components/Cart/Cart';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid'
import Badge from '@mui/material/Badge';
// Styles
import { Wrapper, StyledButton } from './takeaway.styles';
import productData from '../data/products.json'; 
// Types
export type CartItemType = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  amount: number;
  category: string;
};


const App = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([] as CartItemType[]);
    const [products, setProducts] = useState<CartItemType[]>([]);
  
    useEffect(() => {
      // Load product data from JSON file
      setProducts(productData);
    }, []);
  
    const getTotalItems = (items: CartItemType[]) =>
      items.reduce((ack: number, item) => ack + item.amount, 0);
  
    const handleAddToCart = (clickedItem: CartItemType) => {
      setCartItems(prev => {
        // 1. Is the item already added in the cart?
        const isItemInCart = prev.find(item => item.id === clickedItem.id);
  
        if (isItemInCart) {
          return prev.map(item =>
            item.id === clickedItem.id
              ? { ...item, amount: item.amount + 1 }
              : item
          );
        }
        // First time the item is added
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
  
    return (
      <Wrapper>
        <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
          <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />
        </Drawer>
        <StyledButton onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color='warning' />
        </StyledButton>
        <Grid container spacing={3}>
          {products.map(item => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    );
  };
  
  export default App;