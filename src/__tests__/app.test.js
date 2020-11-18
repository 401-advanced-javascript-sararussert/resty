import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../app.js';
import People from '../people.js';

describe('Testing our app components', () => {
  it('should display hello world', async () => {
    render(<App />);
    const DOMElement = await screen.findByTestId('display-text');
    expect(DOMElement).not.toBeEmptyDOMElement();
  });

  it('People should display a list', async () => {
    render(<People list={[{ name: 'jacob' }]} />);
    // const form = await screen.findByTestId('form');
    // expect(form).not.toBeEmptyDOMElement();

    // const input = await screen.findByTestId('input');

    // fireEvent.change(input, { target: { value: 'https://swapi.dev/api/people' } });
    // fireEvent.submit(form);

    const list = await screen.findByTestId('output');
    expect(list).toHaveTextContent('jacob');
  });
});

