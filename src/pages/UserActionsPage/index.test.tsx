import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { render, screen, fireEvent, findByText } from '@testing-library/react';
import { UserActionsPage } from './index';

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
  it('test #3 (): should ', async () => {
    const button = screen.getByRole('button', { name: '-1' });

    fireEvent.click(button);
    expect(await screen.findByText('Counter: -1')).toBeInTheDocument();
  });
  //* ----------------------------------------------------------------------------------------------
});