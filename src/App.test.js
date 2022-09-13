import { render, screen } from '@testing-library/react';
import App from './App';

it('renders app', () => {
  render(<App />);
  const linkElement = screen.queryByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});