import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { prettyDOM, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserInteractionsPage } from './';

describe('test <UserInteractionsPage />', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserInteractionsPage />} />
        </Routes>
      </BrowserRouter>
    );
  });

  afterEach(() => {
    jest.clearAllMocks;
  });

  //* ----------------------------------------------------------------------------------------------
  //* 1.- User Event "Click"
  //* ----------------------------------------------------------------------------------------------
  it('test #1 (user-event click): should click one time in the "button +1"', async () => {
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: /^\+1$/ }));
    expect(screen.getByText(/^Counter: 1$/)).toBeInTheDocument();
  });

  it('test #2 (user-event click): should click two times in the "button -1"', async () => {
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: /^-1$/ }));
    await user.click(screen.getByRole('button', { name: /^-1$/ }));
    expect(screen.getByText(/^Counter: -2$/)).toBeInTheDocument();
  });

  it('test #3 (user-event click): should click one time in the "button Reset"', async () => {
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: /^-1$/ }));
    await user.click(screen.getByRole('button', { name: /^-1$/ }));
    await user.click(screen.getByRole('button', { name: /^Reset$/ }));
    expect(screen.getByText(/^Counter: 0$/)).toBeInTheDocument();
  });
  //* ----------------------------------------------------------------------------------------------

  //* ----------------------------------------------------------------------------------------------
  //* 2.- User Event "Keyboard"
  //* ----------------------------------------------------------------------------------------------
  it('test #4 (user-event keyboard): should that there are two inputs in the document', () => {
    expect(screen.getAllByRole('textbox')).toHaveLength(2);
  });

  it('test #5 (user-event keyboard): should show one input with the label "Name", and  another with the label "Last Name"', () => {
    expect(screen.getByLabelText(/^Name:$/, { selector: 'input' })).toBeInTheDocument();
    expect(screen.getByLabelText(/^Last Name:$/, { selector: 'input' })).toBeInTheDocument();
  });

  it('test #6 (user-event keyboard): should show one input with the placeholder "name", and  another with the placeholder "last name"', () => {
    expect(screen.getByPlaceholderText(/^name$/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/^last name$/)).toBeInTheDocument();
  });

  it('test #7 (user-event keyboard): should type into input name field', async () => {
    const user = userEvent.setup();
    const inputName: HTMLInputElement = screen.getByLabelText(/^Name:$/, { selector: 'input' });

    await user.clear(inputName);
    await user.type(inputName, 'Hello World!');
    expect(inputName).toHaveValue('Hello World!');
  });

  //* ----------------------------------------------------------------------------------------------
  //* 3.- User Event "Utility APIs"
  //* ----------------------------------------------------------------------------------------------
  it('test #8 (user-event clear): should that input name is clear', async () => {
    const user = userEvent.setup();
    const inputName = screen.getByLabelText(/^Name:$/, { selector: 'input' });

    await user.clear(inputName);
    expect(inputName).toHaveValue('');
  });

  it('test #9 (user-event selectOptions(), deselectOptions()):', async () => {
    const user = userEvent.setup();

    await user.selectOptions(screen.getByRole('listbox'), ['A', 'A']);
    const selectLetters = screen.getByRole('listbox');
    const optionA: HTMLOptionElement = screen.getByRole('option', { name: 'A' });
    const optionB: HTMLOptionElement = screen.getByRole('option', { name: 'B' });
    const optionC: HTMLOptionElement = screen.getByRole('option', { name: 'C' });

    await user.selectOptions(selectLetters, ['A', 'A']);

    expect(optionA.selected).toBe(true);
    expect(optionB.selected).toBe(false);
    expect(optionC.selected).toBe(false);

    await user.deselectOptions(selectLetters, 'A');
    await user.selectOptions(selectLetters, ['C', 'C']);

    expect(optionA.selected).toBe(false);
    expect(optionB.selected).toBe(false);
    expect(optionC.selected).toBe(true);

    await user.selectOptions(selectLetters, ['A', 'A']);
    await user.selectOptions(selectLetters, ['B', 'B']);
    await user.selectOptions(selectLetters, ['C', 'C']);

    expect(optionA.selected).toBe(true);
    expect(optionB.selected).toBe(true);
    expect(optionC.selected).toBe(true);
  });

  it('test #10 (user-event type()): should type into an input name field', async () => {
    const user = userEvent.setup();
    const inputName: HTMLInputElement = screen.getByLabelText(/^Name:$/, { selector: 'input' });

    inputName.value = 'Hello World!';
    expect(inputName.value).toBe('Hello World!');
    expect(inputName).toHaveValue('Hello World!');

    await user.clear(inputName);
    await user.type(inputName, 'Newman');
    expect(inputName.value).toBe('Newman');
    expect(inputName).toHaveValue('Newman');
  });
  //* ----------------------------------------------------------------------------------------------

  //* ----------------------------------------------------------------------------------------------
  //* 4.- Convenience APIs
  //* ----------------------------------------------------------------------------------------------
  it('test #11 (user-event click() and pointer(): )', async () => {
    const user = userEvent.setup();
    const buttonSubtract = screen.getByRole('button', { name: /^-1$/ });
    const buttonReset = screen.getByRole('button', { name: /^Reset$/ });
    const buttonAdd = screen.getByRole('button', { name: /^\+1$/ });

    await user.pointer([{ target: buttonReset }, { keys: '[MouseLeft]', target: buttonSubtract }]);
    expect(screen.getByText('Counter: -1')).toBeInTheDocument();

    await user.pointer([{ target: buttonReset }, { keys: '[MouseLeft]', target: buttonSubtract }]);
    expect(screen.getByText('Counter: -2')).toBeInTheDocument();

    await user.click(buttonAdd);
    await user.click(buttonAdd);
    await user.click(buttonAdd);
    expect(screen.getByText('Counter: 1')).toBeInTheDocument();

    await user.pointer([{ target: buttonAdd }, { keys: '[MouseLeft]', target: buttonReset }]);
    expect(screen.getByText('Counter: 0')).toBeInTheDocument();
  });

  it('test #12 (user-event dblClick() and tripleClick(): )', async () => {
    const user = userEvent.setup();
    const buttonSubtract: HTMLButtonElement = screen.getByRole('button', { name: /^-1$/ });
    const buttonReset: HTMLButtonElement = screen.getByRole('button', { name: /^Reset$/ });
    const buttonAdd: HTMLButtonElement = screen.getByRole('button', { name: /^\+1$/ });

    await user.dblClick(buttonAdd);
    expect(screen.getByText('Counter: 2')).toBeInTheDocument();

    await user.tripleClick(buttonSubtract);
    expect(screen.getByText('Counter: -1')).toBeInTheDocument();

    await user.click(buttonReset);
    expect(screen.getByText('Counter: 0')).toBeInTheDocument();

    await user.pointer([
      { target: buttonReset },
      { keys: '[MouseLeft][MouseLeft][MouseLeft]', target: buttonSubtract }
    ]);
    expect(screen.getByText('Counter: -3')).toBeInTheDocument();

    await user.pointer([{ target: buttonAdd }, { keys: '[MouseLeft]', target: buttonReset }]);
    expect(screen.getByText('Counter: 0')).toBeInTheDocument();
  });

  it('test #13 (user-event hover() and unhover: )', async () => {
    const user = userEvent.setup();
    const buttonAdd: HTMLButtonElement = screen.getByRole('button', { name: /^\+1$/ });

    await user.hover(buttonAdd);
    // expect(buttonAdd).toHaveStyle('cursor: pointer');

    await user.pointer([{ target: buttonAdd }]);
    await user.unhover(buttonAdd);
  });
  //* ----------------------------------------------------------------------------------------------
});
