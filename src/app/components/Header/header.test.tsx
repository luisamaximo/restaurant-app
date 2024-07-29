import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '../Header/Header'

describe("Header tests", () => {
it('should render the header', () => {
  render(<Header />)
  expect(screen.getByRole('heading', { level: 1, name: 'Bistro Restaurant' })).toBeDefined()
})

it('should render the takeaway link', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Order Online!' })).toBeDefined()
  })

it('should render the restaurant number', () => {
    render(<Header />)
    expect(screen.getByText('+44 12345 678910')).toBeDefined()
  })

it('should render the opening times', () => {
    render(<Header />)
    expect(screen.getByText('Mon-Sat: 11am - 23pm')).toBeDefined()
  })
})