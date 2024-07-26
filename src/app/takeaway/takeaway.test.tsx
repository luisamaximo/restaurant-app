import { expect } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Takeaway from './page';


describe("menu tests", () => {

    it('should render the takeaway page', () => {
        render(<Takeaway />)
        expect(screen.getByText('Mozzarella sticks')).toBeDefined()
      });
})