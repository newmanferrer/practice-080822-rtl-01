import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserInteractionsPage } from './';
import { COLORS } from '../../colors';

describe('test <UserInteractionsPage />', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <UserInteractionsPage />
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
    expect(screen.getByRole('heading', { level: 3, name: /Counter:/i })).toHaveTextContent(
      /^Counter: 1$/
    );
  });

  it('test #2 (user-event click): should click two times in the "button -1"', async () => {
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: /^-1$/ }));
    await user.click(screen.getByRole('button', { name: /^-1$/ }));

    expect(screen.getByText(/^Counter: -2$/)).toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 3, name: /Counter:/i })).toHaveTextContent(
      /^Counter: -2$/
    );
  });

  it('test #3 (user-event click): should click one time in the "button Reset"', async () => {
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: /^-1$/ }));
    await user.click(screen.getByRole('button', { name: /^-1$/ }));
    await user.click(screen.getByRole('button', { name: /^Reset$/ }));

    expect(screen.getByText(/^Counter: 0$/)).toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 3, name: /Counter:/i })).toHaveTextContent(
      /^Counter: 0$/
    );
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

    //* Select Languages
    const selectLanguages: HTMLSelectElement = screen.getByRole('listbox', {
      name: /^select languages$/
    });
    const optionJavaScript: HTMLOptionElement = screen.getByRole('option', { name: 'JAVASCRIPT' });
    const optionJava: HTMLOptionElement = screen.getByRole('option', { name: 'JAVA' });
    const optionC: HTMLOptionElement = screen.getByRole('option', { name: 'C' });

    await user.selectOptions(selectLanguages, ['javascript', 'JAVASCRIPT']);

    expect(optionJavaScript.selected).toBe(true);
    expect(optionJava.selected).toBe(false);
    expect(optionC.selected).toBe(false);

    await user.deselectOptions(selectLanguages, ['javascript', 'JAVASCRIPT']);
    await user.selectOptions(selectLanguages, ['java', 'JAVA']);

    expect(optionJavaScript.selected).toBeFalsy();
    expect(optionJava.selected).toBeTruthy();
    expect(optionC.selected).toBeFalsy();

    await user.selectOptions(selectLanguages, ['javascript', 'JAVASCRIPT']);
    await user.selectOptions(selectLanguages, ['java', 'JAVA']);
    await user.selectOptions(selectLanguages, ['C', 'C']);

    expect(optionJavaScript.selected).toBeTruthy();
    expect(optionJava.selected).toBeTruthy();
    expect(optionC.selected).toBeTruthy();

    //* Select Frameworks
    const selectFrameworks: HTMLSelectElement = screen.getByRole('listbox', {
      name: /^select frameworks$/
    });
    const optionReact: HTMLOptionElement = screen.getByRole('option', { name: 'REACT' });
    const optionVue: HTMLOptionElement = screen.getByRole('option', { name: 'VUE' });
    const optionAngular: HTMLOptionElement = screen.getByRole('option', { name: 'ANGULAR' });

    await user.selectOptions(selectFrameworks, ['angular', 'ANGULAR']);

    expect(optionReact.selected).toBe(false);
    expect(optionVue.selected).toBe(false);
    expect(optionAngular.selected).toBe(true);

    await user.deselectOptions(selectFrameworks, ['angular', 'ANGULAR']);
    await user.selectOptions(selectFrameworks, ['react', 'REACT']);

    expect(optionReact.selected).toBeTruthy();
    expect(optionVue.selected).toBeFalsy();
    expect(optionAngular.selected).toBeFalsy();

    await user.selectOptions(selectFrameworks, ['react', 'REACT']);
    await user.selectOptions(selectFrameworks, ['vue', 'VUE']);
    await user.selectOptions(selectFrameworks, ['angular', 'ANGULAR']);

    expect(optionReact.selected).toBeTruthy();
    expect(optionVue.selected).toBeTruthy();
    expect(optionAngular.selected).toBeTruthy();
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
  //* 4.- Parentheses on style tests
  //* ----------------------------------------------------------------------------------------------
  it('test #11 (normal and jest-styled-components): should that "button reset" have the following styles', () => {
    const buttonReset = screen.getByRole('button', { name: /^Reset$/ });

    expect(buttonReset).toBeInTheDocument();

    //* normal
    expect(buttonReset).toHaveStyle(`background-color: ${COLORS.redRTL}`);
    expect(buttonReset).toHaveStyle({
      'background-color': `${COLORS.redRTL}`,
      color: `${COLORS.black}`
    });

    //* jest-styled-components
    expect(buttonReset).toHaveStyleRule('background-color', `${COLORS.redRTL}`);
    expect(buttonReset).toHaveStyleRule('background-color', `${COLORS.textBlueLight}`, {
      modifier: '&:hover '
    });
  });
  //* ----------------------------------------------------------------------------------------------

  //* ----------------------------------------------------------------------------------------------
  //* 5.- Convenience APIs
  //* ----------------------------------------------------------------------------------------------
  it('test #12 (user-event click() and pointer(): )', async () => {
    const user = userEvent.setup();
    const buttonSubtract = screen.getByRole('button', { name: /^-1$/ });
    const buttonReset = screen.getByRole('button', { name: /^Reset$/ });
    const buttonAdd = screen.getByRole('button', { name: /^\+1$/ });

    await user.pointer([{ target: buttonReset }, { keys: '[MouseLeft]', target: buttonSubtract }]);
    expect(screen.getByText(/^Counter: -1$/)).toBeInTheDocument();

    await user.pointer([{ target: buttonReset }, { keys: '[MouseLeft]', target: buttonSubtract }]);
    expect(screen.getByText(/^Counter: -2$/)).toBeInTheDocument();

    await user.click(buttonAdd);
    await user.click(buttonAdd);
    await user.click(buttonAdd);
    expect(screen.getByText(/^Counter: 1$/)).toBeInTheDocument();

    await user.pointer([{ target: buttonAdd }, { keys: '[MouseLeft]', target: buttonReset }]);
    expect(screen.getByText(/^Counter: 0$/)).toBeInTheDocument();
  });

  it('test #13 (user-event dblClick() and tripleClick(): )', async () => {
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

  it('test #14 (user-event hover and unhover): ', async () => {
    const user = userEvent.setup();
    const buttonAdd: HTMLButtonElement = screen.getByRole('button', { name: /^\+1$/ });

    expect(buttonAdd).toBeInTheDocument();
    expect(buttonAdd).toHaveStyle(`background-color: ${COLORS.redRTL}`);

    // this does not work
    // await user.hover(buttonAdd);
    // expect(buttonAdd).toHaveStyle(`background-color: ${COLORS.textBlueLight}`);
  });
  //* ----------------------------------------------------------------------------------------------
});
