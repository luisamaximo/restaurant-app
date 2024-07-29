import { expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import Takeaway from './page';


describe("menu tests", () => {

    it('should render the takeaway page', () => {
        render(<Takeaway />)
        expect(screen.getByText('Mozzarella sticks')).toBeDefined()
        expect(screen.getByRole('heading', { level: 1, name: 'Please add your items to the cart. When you are ready, kindly proceed to the counter for payment.' })).toBeDefined()
      });

      it('should change the final price when the plus button is clicked', () => {
        render(<Takeaway />)
        const addToCart = screen.getAllByTestId('addbutton');
        fireEvent.click(addToCart[0]);
        const cartbutton = screen.getByTestId('cartbutton');
        fireEvent.click(cartbutton);
        const plusbutton = screen.getByTestId('plus')
        fireEvent.click(plusbutton);
        expect(screen.getAllByText('Total Sum: £13.98')).toBeDefined()
      });

      it('should change the final price when the minus button is clicked', () => {
        render(<Takeaway />)
        const addToCart = screen.getAllByTestId('addbutton');
        fireEvent.click(addToCart[0]);
        fireEvent.click(addToCart[0]);
        const cartbutton = screen.getByTestId('cartbutton');
        fireEvent.click(cartbutton);
        const minusbutton = screen.getByTestId('minus')
        fireEvent.click(minusbutton);
        expect(screen.getAllByText('Total Sum: £6.99')).toBeDefined()
      });
})