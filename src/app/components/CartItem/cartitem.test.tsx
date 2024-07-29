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

    it('should render the CartItem component', () => {
        render(<CartItem item={mockItem} addToCart={() => {}} removeFromCart={() => {}}/>)
        expect(screen.getByText('Mozzarella sticks')).toBeDefined()
        expect(screen.getByText("Price: £6.99")).toBeDefined()
        expect(screen.getByText("Total: £6.99")).toBeDefined()
        expect(screen.getByTestId("plus")).toBeDefined()
        expect(screen.getByTestId("minus")).toBeDefined()
      });
});