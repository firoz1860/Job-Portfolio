import { render, screen } from '@testing-library/react';
import App from './App';

// IntersectionObserver is not implemented in jsdom; provide a no-op stub so
// components using the reveal-on-scroll hook render during tests.
beforeAll(() => {
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
  window.matchMedia = window.matchMedia || function () {
    return { matches: false, addListener() {}, removeListener() {} };
  };
});

test('renders the hero with the developer name', () => {
  render(<App />);
  expect(screen.getAllByText(/Firoz Ahmad/i).length).toBeGreaterThan(0);
});

test('renders the primary call-to-action', () => {
  render(<App />);
  expect(screen.getByText(/view my work/i)).toBeInTheDocument();
});
