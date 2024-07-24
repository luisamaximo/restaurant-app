import { expect, test } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import Menu from '../menu/page'


describe("menu tests", () => {

    it('should render the Menu', () => {
        render(<Menu />)
        expect(screen.getByRole('heading', { level: 1, name: 'Menu' })).toBeDefined()
      })
    
    it('fetches and displays menu items', async () => {
        render(<Menu />);
        
        // Wait for the menu items to be displayed
        const menuItems = await waitFor(() => screen.findAllByTestId('menu-item'));
        
        // Ensure that menu items are rendered
        expect(menuItems.length).toBeGreaterThan(0); // Adjust based on your mock data
    });
})