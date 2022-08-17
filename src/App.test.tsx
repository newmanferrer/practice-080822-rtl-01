import { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';

describe('test <App />', () => {
  afterEach(() => {
    jest.clearAllMocks;
  });

  it('test #1: should render this component mock', () => {
    const h1Mock = <h1>My component h1</h1>;
    const component = render(h1Mock);
    // component.debug();

    expect(
      component.getByRole('heading', { level: 1, name: /^My component h1$/ })
    ).toBeInTheDocument();
  });

  it('test #2: should show "Learning React Testing Library", in the document', () => {
    render(<App />);

    const myH1 = screen.getByRole('heading', {
      level: 1,
      name: /^Learning React Testing Library$/
    });

    expect(myH1).toBeInTheDocument();
  });

  it('test #3: should render this component mock and show "Hello, world!", in the document', () => {
    const h1Mock = <h1>Hello, world!</h1>;
    const { getByRole } = render(h1Mock);

    expect(getByRole('heading', { level: 1, name: 'Hello, world!' })).toBeInTheDocument();
    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  });

  it('test #4: should renders a functional component and show "Hello, world!"', () => {
    const HelloWorld = () => <h1>Hello, world!</h1>;
    const { debug, getByRole } = render(<HelloWorld />);

    // debug();
    expect(getByRole('heading', { level: 1, name: 'Hello, world!' })).toBeInTheDocument();
  });

  it('test #5: should re-render this functional component mock', () => {
    interface INumberDisplayMockProps {
      number: number;
    }

    const NumberDisplayMock = ({ number }: INumberDisplayMockProps) => <article>{number}</article>;
    const { rerender } = render(<NumberDisplayMock number={1} />);

    expect(screen.getByRole('article')).toHaveTextContent('1');

    rerender(<NumberDisplayMock number={2} />);
    expect(screen.getByRole('article')).toHaveTextContent('2');
  });

  it('test #6: should unmount the App component', () => {
    const { getByRole, unmount } = render(<App />);
    const myH1 = getByRole('heading', { level: 1, name: /^Learning React Testing Library$/ });

    expect(myH1).toBeInTheDocument();
    unmount();
    expect(myH1).not.toBeInTheDocument();
  });

  it('test #7 (fireEvent): should click in the button component mock', () => {
    const CounterMock = () => {
      const [count, setCount] = useState(0);

      return (
        <>
          <article>{count}</article>
          <button onClick={() => setCount(count => count + 1)}>add 1</button>;
        </>
      );
    };

    const { getByRole } = render(<CounterMock />);
    const myArticle = getByRole('article');
    const myButton = getByRole('button', { name: /^add 1$/ });

    expect(myArticle).toHaveTextContent('0');

    fireEvent.click(myButton);
    fireEvent.click(myButton);
    fireEvent.click(myButton);
    expect(myArticle).toHaveTextContent('3');
  });

  it('test #8: should that the number of elements heading is correct ', () => {
    const { getAllByRole } = render(<App />);

    const h1Elements = getAllByRole('heading', { level: 1 });
    expect(h1Elements).toHaveLength(1);

    const h2Elements = getAllByRole('heading', { level: 2 });
    expect(h2Elements).toHaveLength(3);

    const h3Elements = getAllByRole('heading', { level: 3 });
    expect(h3Elements).toHaveLength(4);

    const h4Elements = getAllByRole('heading', { level: 4 });
    expect(h4Elements).toHaveLength(5);
  });
});
