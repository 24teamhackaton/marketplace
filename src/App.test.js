import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import data from "./data/dataVoices.json";

const articlesMap = new Map(data.map(article => [article.id, article]));

describe('Display titles', () => {
  test('Heading Best sellers is typed', () => {
    render(<App />);
    const text = screen.getAllByRole('heading', { name: /best sellers/i });
    expect(text[0]).toBeInTheDocument()
  });
  test('Heading Work with us is typed', () => {
    render(<App />);
    const text = screen.getAllByRole('heading', { name: /work with us/i });
    expect(text[0]).toBeInTheDocument()
  });
  test('Heading Customer reviews is typed', () => {
    render(<App />);
    const text = screen.getAllByRole('heading', { name: /customer reviews/i });
    expect(text[0]).toBeInTheDocument()
  });  
})

describe('Display Buttons', () => {
  test('Show more button is displayed', () => {
    render(<App />);
    const text = screen.getAllByRole('button', { name: /show more/i });
    expect(text[0]).toBeInTheDocument()
  });
  test('More info button is displayed', () => {
    render(<App />);
    const text = screen.getAllByRole('button', { name: /more info/i });
    expect(text[0]).toBeInTheDocument()
  });  
})

describe('Best seller section DB-json connected', () => {
  test('It must exist at least one article', async() => {
    render(<App />);
    await waitFor(async () => {
      const lista = await screen.findAllByRole('article');
      expect(lista[0]).toBeInTheDocument();
    });
  });
  
})
