// Test your application as you expect a user to use it. These are "acceptance" tests, not unit tests!

// Render your application (or a single component)
// Use the RTL "getBy" or "findBy" selectors to identify elements
// Use fireEvent to simulate clicks, typing, submission of forms
// Assert on the results you expect to SEE
// import { render, fireEvent, waitFor, screen } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect'
// import App from '../app-number.js'

// test('dynamically updates number', async () => {
//   render(<App />);
//   const input = screen.getByTestId('num');
//   const h1 = screen.getByTestId('output');
//   fireEvent.change(input, { target: { value: 1234 } });
//   expect(h1).toHaveTextContent('1234')
// })