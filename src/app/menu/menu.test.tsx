import { expect } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Menu from '../menu/page'
import { filters } from '../data/data';


describe("menu tests", () => {

    it('should render the Menu', () => {
        render(<Menu />)
        expect(screen.getByRole('heading', { level: 1, name: 'Menu' })).toBeDefined()
      });
    
    it('should display all main options', async () => {
        render(<Menu />);
        await waitFor(() => screen.getAllByText(/main/i));
        const mainFilter = screen.getAllByText(/main/i)[0];
        fireEvent.click(mainFilter);
        await waitFor(() => {
            expect(screen.getByText(/Steak and Fries/i)).toBeDefined();
        });
        await waitFor(() => {
            expect(screen.getByText(/Herb-Crusted Salmon with Lemon Dill Sauce and Aspargus/i)).toBeDefined();
        });
    });
    it('should display all options', async () => {
        render(<Menu />);
        await waitFor(() => screen.getAllByText(/all/i));
        const mainFilter = screen.getAllByText(/all/i)[0];
        fireEvent.click(mainFilter);
        await waitFor(() => {
            expect(screen.getByText(/Mozzarella sticks/i)).toBeDefined(); //should I add every single dish like I did for main?
        });
    });
})