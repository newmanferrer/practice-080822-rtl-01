import { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';

describe('test App Component', () => {
  afterEach(() => {
    jest.clearAllMocks;
  });

  it('test #1: should show "Learning React Testing Library", in the document', () => {
    const { getByRole } = render(<App />);

    expect(
      getByRole('heading', { level: 1, name: /^Learning React Testing Library$/ })
    ).toBeInTheDocument();
  });

  it('test #2 (Mock): should show "Learning React Testing Library", in the document', () => {
    const mockH1 = <h1>Learning React Testing Library</h1>;
    const { getByRole } = render(mockH1);

    expect(
      getByRole('heading', { level: 1, name: /^Learning React Testing Library$/ })
    ).toBeInTheDocument();
  });

  it('test #3: should show "Practice No. 1", in the document', () => {
    render(<App />);

    const h2Element = screen.getByRole('heading', { level: 2, name: /^Practice No. 1$/ });
    expect(h2Element).toBeInTheDocument();
  });

  it('test #4 (Mock): should show "Practice No. 1", in the document', () => {
    const mockH2 = <h2>Practice No. 1</h2>;
    render(mockH2);

    const h2Element = screen.getByRole('heading', { level: 2, name: /^Practice No. 1$/ });
    expect(h2Element).toBeInTheDocument();
  });

  it('test #5: should renders a functional component and show "Hello, world!"', () => {
    const HelloWorld = () => <h1>Hello, world!</h1>;
    const { getByRole } = render(<HelloWorld />);

    expect(getByRole('heading', { level: 1, name: 'Hello, world!' })).toBeInTheDocument();
  });

  it('test #6: should re-render a functional component', () => {
    interface IDisplayNumberProps {
      number: number;
    }

    const DisplayNumber = ({ number }: IDisplayNumberProps) => <article>{number}</article>;
    const { rerender, getByRole } = render(<DisplayNumber number={1} />);
    expect(getByRole('article')).toHaveTextContent('1');

    rerender(<DisplayNumber number={2} />);
    expect(getByRole('article')).toHaveTextContent('2');
  });

  it('test #7: should unmount the App component', () => {
    const { getByRole, unmount } = render(<App />);
    const h1element = getByRole('heading', { level: 1, name: /^Learning React Testing Library$/ });

    expect(h1element).toBeInTheDocument();
    unmount();
    expect(h1element).not.toBeInTheDocument();
  });

  it('test #8: should that the number of elements heading is correct ', () => {
    const { getAllByRole } = render(<App />);

    expect(getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(getAllByRole('heading', { level: 2 })).toHaveLength(3);
    expect(getAllByRole('heading', { level: 3 })).toHaveLength(4);
    expect(getAllByRole('heading', { level: 4 })).toHaveLength(5);
  });

  it('test #9 (Mock): should click in the button component mock use fireEvent', () => {
    const CounterMock = () => {
      const [count, setCount] = useState(0);

      return (
        <>
          <article title='count article'>{count}</article>
          <button onClick={() => setCount(count => count + 1)}>add 1</button>;
        </>
      );
    };

    const { getByRole } = render(<CounterMock />);
    const article = getByRole('article', { name: /^count article$/ });
    const button = getByRole('button', { name: /^add 1$/ });

    expect(article).toHaveTextContent('0');

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(article).toHaveTextContent('3');
  });
});
