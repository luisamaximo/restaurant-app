import { expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import Cart from './Cart';
import { CartItemType } from '@/app/types/menuTypes';

describe("Cart tests", () => {
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

    it('should render the Cart component', () => {
        render(<Cart cartItems={noItemsInCart} addToCart={() => {}} removeFromCart={() => {}} clearCart={() => {}}/>)
        expect(screen.getByRole('heading', { level: 2, name: 'Your Shopping Cart' })).toBeDefined()
        expect(screen.getByRole('heading', { level: 2, name: 'Total Sum: £0.00' })).toBeDefined()
      })
    
    it('should have no items display initially', () => {
        render(<Cart cartItems={noItemsInCart} addToCart={() => {}} removeFromCart={() => {} } clearCart={() => {}}/>)
        expect(screen.getByText('No items in cart.')).toBeDefined()
      });
    
    it('should have display items added to the cart', () => {
        render(<Cart cartItems={mockItem} addToCart={() => {}} removeFromCart={() => {}} clearCart={() => {}}/>)
        expect(screen.getByText('Mozzarella sticks')).toBeDefined()
        expect(screen.getByRole('heading', { level: 2, name: 'Total Sum: £6.99' })).toBeDefined() //using getByRole as there are two 'Total' when you add an item on the cart, one total per item and one final total for the whole purchase    
      });
});