import { expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import MenuItem from './MenuItem';

describe("MenuItem tests", () => {
    const mockItem = {
        id: 1,
        name: "Mozzarella sticks",
        price: 6.99,
        preview: '/assets/images/menu/MozzarellaSticks.jpeg',
        ingredients: 'Mozzarella cheese sticks coated in Italian breadcrumbs',
        category: "starters",
        description: "Mozzarella cheese sticks coated in Italian breadcrumbs ",
      }

    it('should render the MenuItem component', () => {
        render(<MenuItem key={mockItem.id} item={mockItem}/>)
        expect(screen.getByText('Mozzarella sticks')).toBeDefined()
        expect(screen.getByText('Mozzarella cheese sticks coated in Italian breadcrumbs')).toBeDefined()
        expect(screen.getByText('£6.99')).toBeDefined() 
      });
    })