import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { UserActionsPage } from './';

describe('test <FiringEventsPage />', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserActionsPage />} />
        </Routes>
      </BrowserRouter>
    );
  });

  afterEach(() => {
    jest.clearAllMocks;
  });

  //* ----------------------------------------------------------------------------------------------
  //* Firing Events Examples
  //* ----------------------------------------------------------------------------------------------
  it('test #1 (getByRole): should be show the counter buttons whit the names  "-1, Reset and +1" in the document', () => {
    expect(screen.getByRole('button', { name: /-1/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Reset/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '+1' })).toBeInTheDocument();
  });

  it('test #2 (getByRole/fireEvent): should the "button - Button +1", click just three time', () => {
    const button = screen.getByRole('button', { name: '+1' });
    const h3 = screen.getByRole('heading', { level: 3, name: /Counter: 0/ });

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(h3).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(h3).toHaveTextContent('Counter: 3');
  });
  //* ----------------------------------------------------------------------------------------------

  //* ----------------------------------------------------------------------------------------------
  //* Async Methods Examples
  //* ----------------------------------------------------------------------------------------------
  it('test #3 (findByText/await): should the "Button -1", click just one time', async () => {
    const button = screen.getByRole('button', { name: '-1' });

    fireEvent.click(button);
    expect(await screen.findByText('Counter: -1')).toBeInTheDocument();
  });

  it('test #4 (getByText/waitFor): should the "Button +1", click just two times and "Button Reset", click just one time', async () => {
    const buttonAddOne = screen.getByRole('button', { name: '+1' });
    const buttonReset = screen.getByRole('button', { name: 'Reset' });

    fireEvent.click(buttonAddOne);
    fireEvent.click(buttonAddOne);
    fireEvent.click(buttonReset);

    await waitFor(() => expect(screen.getByText('Counter: 0')).toBeInTheDocument());
  });

  it('test #5 (findByText/waitFor): should the "Button -1", click just two times and "Button Reset", click just one time', async () => {
    const buttonSubtractOne = screen.getByRole('button', { name: '-1' });
    const buttonReset = screen.getByRole('button', { name: 'Reset' });

    fireEvent.click(buttonSubtractOne);
    fireEvent.click(buttonSubtractOne);
    fireEvent.click(buttonReset);

    await waitFor(async () => expect(await screen.findByText('Counter: 0')).toBeInTheDocument());
  });
  //* ----------------------------------------------------------------------------------------------

  //* ----------------------------------------------------------------------------------------------
  //* Considerations for fireEvent
  //* ----------------------------------------------------------------------------------------------
  it('test #6: should the "button +1", click just two times', () => {
    const buttonAdd = screen.getByRole('button', { name: '+1' });

    fireEvent.mouseMove(buttonAdd);
    fireEvent.mouseOver(buttonAdd);
    fireEvent.mouseDown(buttonAdd);
    fireEvent.mouseUp(buttonAdd);
    fireEvent.click(buttonAdd);
    fireEvent.click(buttonAdd);

    expect(screen.getByText('Counter: 2')).toBeInTheDocument();
  });
  //* ----------------------------------------------------------------------------------------------
});
