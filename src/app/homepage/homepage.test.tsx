import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from '../homepage/Homepage'

describe("homepage tests", () => {
it('should render the heading', () => {
  render(<Hero />)
  expect(screen.getByRole('heading', { level: 1, name: 'Welcome to Bistro Restaurant' })).toBeDefined()
})

it('should render the menu link', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Menu' })).toBeDefined()
  })

  it('should render the booking link', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Book a table' })).toBeDefined()
  })
})


  