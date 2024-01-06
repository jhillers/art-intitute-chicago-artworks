import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// TODO: tests... 
test('renders Home page', () => {
  render(<App />)

  expect(screen.getByText(/ Hey developer/i)).toBeInTheDocument()
  
});
