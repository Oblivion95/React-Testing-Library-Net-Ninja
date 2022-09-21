import { screen, render } from '@testing-library/react';
import App from './App';

it('should render the app', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});