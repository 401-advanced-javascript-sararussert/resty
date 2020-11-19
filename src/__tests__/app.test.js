import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App.js';

const server = setupServer(
  rest.get('*', (req, res, ctx) => {
    return res(ctx.json({
      results: [
        { name: 'foo', url: 'http://test.com' },
        { name: 'bar', url: 'http://test.com' },
      ]
    }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


describe('testing app components', () => {
  it('should load names and urls from mocked endpoint', async () => {
    render(<App />);

    let items = await waitFor(() => screen.getAllByRole('listitem'));

    expect(items[0]).toHaveTextContent('foo');
    expect(items[1]).toHaveTextContent('bar');
  });
})

