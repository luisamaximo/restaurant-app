import { expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Takeaway from './page';


describe("menu tests", () => {

    it('should render the takeaway page', () => {
        render(<Takeaway />)
        expect(screen.getByText('Mozzarella sticks')).toBeDefined()
        expect(screen.getByRole('heading', { level: 1, name: 'Please add your items to the cart. When you are ready, kindly proceed to the counter for payment.' })).toBeDefined()
      });
})