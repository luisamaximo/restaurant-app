import { expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Booking from "./page";

describe("Booking tests", () => {

    it('should render the booking page', () => {
        render(<Booking />)
        expect(screen.getByPlaceholderText('Your Name')).toBeDefined();
        expect(screen.getByPlaceholderText('Your Email')).toBeDefined();
        expect(screen.getByPlaceholderText('Your Phone')).toBeDefined();
      })
})