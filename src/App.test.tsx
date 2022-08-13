import { useState } from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom';
import { App } from './App';

describe('test <APP />', () => {
  afterEach(() => {
    jest.clearAllMocks;
  });

  it('test #1: should the jest is working', () => {
    expect(true).toBe(true);
  });

  /*  it('test #2: should render this component', () => {
    const h1Mock = <h1>My component h1</h1>;
    const component = render(h1Mock);
    component.debug();

    expect(component.getByText('My component h1')).toBeInTheDocument();
  }); */

  /*  it('test #3: should renders a message 1', () => {
    const h1Mock = <h1>Hello, world!</h1>;
    const { getByText } = render(h1Mock);

    expect(getByText('Hello, world!')).toBeInTheDocument();
  }); */

  /* it('test #4: should renders a message 2', () => {
    const HelloWorld = () => <h1>Hello, world!</h1>;
    const { debug, getByText } = render(<HelloWorld />);

    debug();
    expect(getByText('Hello, world!')).toBeInTheDocument();
  }); */

  /* it('test #5: should re-render a component', () => {
    interface NumberDisplayMockProps {
      number: number;
    }

    const NumberDisplayMock = ({ number }: NumberDisplayMockProps) => <article>{number}</article>;
    const { rerender } = render(<NumberDisplayMock number={1} />);

    expect(screen.getByRole('article')).toHaveTextContent('1');

    rerender(<NumberDisplayMock number={2} />);
    expect(screen.getByRole('article')).toHaveTextContent('2');
  }); */

  /* it('test #6: should unmount the App component', () => {
    const { debug, getByText, unmount } = render(<App />);
    const myH1 = getByText('Queries in React Testing Library');
    debug();

    expect(myH1).toBeInTheDocument();

    unmount();
    debug();
    expect(myH1).not.toBeInTheDocument();
  });*/

  /* it('test #7: should click in the button component', () => {
    const CountMock = () => {
      const [count, setCount] = useState(0);

      return (
        <>
          <article>{count}</article>
          <button onClick={() => setCount(count => count + 1)}>add 1</button>;
        </>
      );
    };

    const { getByText, getByRole } = render(<CountMock />);
    const myArticle = getByRole('article');
    const myButton = getByText(/add 1/);

    console.log(prettyDOM(myArticle));
    console.log(prettyDOM(myButton));

    expect(myArticle).toHaveTextContent('0');

    fireEvent.click(myButton);
    fireEvent.click(myButton);
    fireEvent.click(myButton);
    expect(myArticle).toHaveTextContent('3');
  }); */
});
