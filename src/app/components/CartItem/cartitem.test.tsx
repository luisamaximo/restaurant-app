import { expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import CartItem from './CartItem';
import { appendMutableCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
describe("CartItem tests", () => {
    const mockItem = {
        "id": 1,
        "description": "Mozzarella cheese sticks coated in Italian breadcrumbs",
        "image": "/assets/images/menu/MozzarellaSticks.jpeg",
        "price": 6.99,
        "name": "Mozzarella sticks",
        "amount": 1,
        "category": "starter"
      }

    const mockAddToCart = () => {};

    it('should render the CartItem component', () => {
        render(<CartItem item={mockItem} addToCart={() => {}} removeFromCart={() => {}}/>)
        expect(screen.getByText('Mozzarella sticks')).toBeDefined()
        expect(screen.getByText("Price: £6.99")).toBeDefined()
        expect(screen.getByText("Total: £6.99")).toBeDefined()
      });

      //   it('should increase price and quantity when you click the plus button', () => {
    //     render(<CartItem item={mockItem} addToCart={mockAddToCart} removeFromCart={() => {}} />)
    //     const plusButton = screen.getByTestId("plus")
    //     fireEvent.click(plusButton);
    //     expect(screen.getByText("Total: 12.98")).toBeInTheDocument()
    //   });
        });