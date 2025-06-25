import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app component with correct text', () => {
  render(<App />);
  const textElement = screen.getByText(/UK Bank Holidays/i);
  expect(textElement).toBeInTheDocument();
});