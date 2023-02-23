import { render, screen } from '@testing-library/react';
import App from './App';

describe('Display titles', () => {
  test('Heading Best sellers is typed', () => {
    render(<App />);
    const text = screen.getByRole('heading', { name: /best sellers/i });
    expect(text).toBeInTheDocument()
  });
  test('Heading Work with us is typed', () => {
    render(<App />);
    const text = screen.getByRole('heading', { name: /work with us/i });
    expect(text).toBeInTheDocument()
  });
  test('Heading Customer reviews is typed', () => {
    render(<App />);
    const text = screen.getByRole('heading', { name: /customer reviews/i });
    expect(text).toBeInTheDocument()
  });  
})

describe('Display Buttons', () => {
  test('Show more button is displayed', () => {
    render(<App />);
    const text = screen.getByRole('button', { name: /show more/i });
    expect(text).toBeInTheDocument()
  });
  test('More info button is displayed', () => {
    render(<App />);
    const text = screen.getByRole('button', { name: /more info/i });
    expect(text).toBeInTheDocument()
  });  
})