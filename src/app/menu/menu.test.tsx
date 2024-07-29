import { expect } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Menu from './page'
import { filters } from '../data/data';


describe("menu tests", () => {

    it('should render the Menu', () => {
        render(<Menu />)
        expect(screen.getByRole('heading', { level: 1, name: 'Menu' })).toBeDefined()
      });

    it('should display all dishes by default and when filter is clicked it should only show the dishes that fit on that category', async () => {
        render(<Menu />);
        expect(screen.getByText(/Mozzarella sticks/i)).toBeDefined();
        expect(screen.getByText(/Caesar Salad/i)).toBeDefined();
        const startersFilter = screen.getAllByText(/starters/i)[0];
        fireEvent.click(startersFilter);
        expect(screen.getByText(/Mozzarella sticks/i)).toBeDefined();
        expect(screen.queryByText(/Caesar Salad/i)).toBeNull();
    });
})