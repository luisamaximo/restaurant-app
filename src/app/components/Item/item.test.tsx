import { expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Item from './Item';
describe("Item tests", () => {
    const mockItem = {
        "id": 1,
        "description": "Mozzarella cheese sticks coated in Italian breadcrumbs",
        "image": "/assets/images/menu/MozzarellaSticks.jpeg",
        "price": 6.99,
        "name": "Mozzarella sticks",
        "amount": 0,
        "category": "starter"
      }

    it('should render the item component', () => {
        render(<Item item={mockItem} handleAddToCart={() => {}} />)
        expect(screen.getByText('Mozzarella sticks')).toBeDefined()
        expect(screen.getByText('Mozzarella cheese sticks coated in Italian breadcrumbs')).toBeDefined()
        expect(screen.getByText("£6.99")).toBeDefined()
      });
});