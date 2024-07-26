import { expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import Cart from './Cart';
import { CartItemType } from '@/app/types/menuTypes';

describe("CartItem tests", () => {
    const noItemsInCart: CartItemType[] = []
    
    const mockItem: CartItemType[] = [{
        "id": 1,
        "description": "Mozzarella cheese sticks coated in Italian breadcrumbs",
        "image": "/assets/images/menu/MozzarellaSticks.jpeg",
        "price": 6.99,
        "name": "Mozzarella sticks",
        "amount": 1,
        "category": "starter"
      }]

    it('should render the header', () => {
        render(<Cart cartItems={noItemsInCart} addToCart={() => {}} removeFromCart={() => {}}/>)
        expect(screen.getByRole('heading', { level: 2, name: 'Your Shopping Cart' })).toBeDefined()
        expect(screen.getByRole('heading', { level: 2, name: 'Total: £0.00' })).toBeDefined()
      })
    
    it('should have no items display initially', () => {
        render(<Cart cartItems={noItemsInCart} addToCart={() => {}} removeFromCart={() => {}}/>)
        expect(screen.getByText('No items in cart.')).toBeDefined()
      });
    
    it('should have display items added to the cart', () => {
        render(<Cart cartItems={mockItem} addToCart={() => {}} removeFromCart={() => {}}/>)
        expect(screen.getByText('Mozzarella sticks')).toBeDefined()
      });
});