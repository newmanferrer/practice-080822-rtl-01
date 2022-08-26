import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { QueriesPage } from './index';

describe('test <QueriesPage />', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <QueriesPage />
      </BrowserRouter>
    );
  });

  afterEach(() => {
    jest.clearAllMocks;
  });

  //* 1.- Sorted by priority (Best - Worst)
  //* -------------------------------------------------------------------------
  //*             |   0 Matches |     1 Match    | >1 Matches   | Async/Await
  //* -------------------------------------------------------------------------
  //* getBy...    | Throw error | Return Element | Throw error  |     No
  //* -------------------------------------------------------------------------
  //* getAllBy... | Throw error |  Return Array  | Return Array |     No
  //* -------------------------------------------------------------------------

  it('test #1 (getByRole): should get one specific element in the document', () => {
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /^Queries in React Testing Library$/
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { level: 2, name: /^1.- Types of Queries$/ })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { level: 2, name: /^2.- Priority of Queries$/ })
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /^RTL: docs queries$/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^1.- Types of Queries$/ })).toBeDefined();
    expect(screen.getByRole('heading', { name: /^1.- Types of Queries$/ })).toBeEnabled();
    expect(screen.getByRole('heading', { name: /^1.- Types of Queries$/ })).not.toBeDisabled();

    expect(screen.getByRole('heading', { name: /^1.- Types of Queries$/ })).not.toHaveAttribute(
      'data-testid'
    );
  });

  it('test #2 (getAllByRole): should get all specific elements in the document', () => {
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1); // h1
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(8); // h2
    expect(screen.getAllByRole('link')).toHaveLength(6); // a
    expect(screen.getAllByRole('region')).toHaveLength(6); // section
    expect(screen.getAllByRole('form')).toHaveLength(1); // form
    expect(screen.getAllByRole('textbox')).toHaveLength(2); // input
  });

  it('test #3 (getByLabelText: should get one specific element in the document)', () => {
    expect(screen.getByLabelText(/^Name:$/, { selector: 'input' })).toBeInTheDocument();
    expect(screen.getByLabelText(/^Last Name:$/, { selector: 'input' })).toBeInTheDocument();
  });

  it('test #4 (getAllByLabelText): should get all specific elements in the document)', () => {});

  it('test #5 (getByPlaceholderText): should get one specific element in the document)', () => {
    expect(screen.getByPlaceholderText(/^name$/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/^name$/)).toBeDefined();
    expect(screen.getByPlaceholderText(/^last name$/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/^last name$/)).toBeDefined();
  });

  it('test #6 (getAllByPlaceholderText): should get all specific elements in the document)', () => {});

  it('test #7 (getByText): should get one specific element in the document', () => {
    // Matching a string
    expect(screen.getByText('Queries in React Testing Library')).toBeInTheDocument();
    expect(
      screen.getByText('Queries in React Testing Library', { exact: true })
    ).toBeInTheDocument();
    expect(screen.getByText('es in React Tes', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('iN reacT testinG librarY', { exact: false })).toBeInTheDocument();

    // Matching a regex
    expect(screen.getByText(/Queries in React/)).toBeInTheDocument();
    expect(screen.getByText(/queries in react testing library/i)).toBeInTheDocument();
    expect(screen.getByText(/^Queries in React Testing Library$/i)).toBeInTheDocument();
    expect(screen.getByText(/Queries in R?eact TESTING Library$/i)).toBeInTheDocument();

    // Matching with a custom function
    expect(
      screen.getByText((content, element) => content.startsWith('Queries in React Testing Library'))
    ).toBeInTheDocument();
  });

  it('test #8 (getAllByText): should get all specific elements in the document', () => {});

  it('test #9 (getByDisplayValue): should get one specific element in the document', () => {});

  it('test #10 (getAllByDisplayValue): should get all specific elements in the document', () => {});

  it('test #11 (getByAltText): should get one specific element in the document', () => {
    expect(screen.getByAltText(/^image octopus$/)).toBeInTheDocument();
    expect(screen.getByAltText(/^image octopus$/)).toBeDefined();

    expect(screen.getByAltText(/^input name$/)).toBeInTheDocument();
    expect(screen.getByAltText(/^input name$/)).toBeDefined();

    expect(screen.getByAltText(/^input last name$/)).toBeInTheDocument();
    expect(screen.getByAltText(/^input last name$/)).toBeDefined();
  });

  it('test #12 (getAllByAltText): should get all specific elements in the document', () => {});

  it('test #13 (getByTitle): should get one specific element in the document', () => {
    expect(screen.getByTitle(/^image octopus$/)).toBeInTheDocument();
    expect(screen.getByTitle(/^input name$/)).toBeInTheDocument();
    expect(screen.getByTitle(/^input last name$/)).toBeInTheDocument();
  });

  it('test #14 (getAllByTitle): should get all specific elements in the document', () => {});

  it('test #15 (getByTestId): should get one specific element in the document', () => {
    expect(screen.getByTestId(/^section image$/)).toBeInTheDocument();
  });

  it('test #16 (getAllByTestId): should get all specific elements in the document', () => {});

  //* 2.- queryBy... and queryAllBy
  //* ---------------------------------------------------------------------------------
  //*               |      0 Matches     |     1 Match    | >1 Matches   | Async/Await
  //* ---------------------------------------------------------------------------------
  //* queryBy...    |        null        | Return Element | Throw error  |     No
  //* ---------------------------------------------------------------------------------
  //* queryAllBy... | Return Empty Array |  Return Array  | Return Array |     No
  //* ---------------------------------------------------------------------------------

  it('test #17 (queryByRole): should get one specific element in the document', () => {
    expect(
      screen.queryByRole('heading', {
        level: 1,
        name: /^Queries in React Testing Library$/
      })
    ).toBeInTheDocument();

    expect(
      screen.queryByRole('heading', {
        level: 2,
        name: /^1.- Types of Queries$/
      })
    ).toBeInTheDocument();
  });

  it('test #18 (queryAllByRole): should get all specific elements in the document', () => {
    expect(screen.queryAllByRole('region')).toHaveLength(6);

    expect(screen.queryAllByRole('heading')).toHaveLength(9);

    expect(
      screen.queryAllByRole('heading', {
        level: 1
      })
    ).toHaveLength(1);

    expect(
      screen.queryAllByRole('heading', {
        level: 2
      })
    ).toHaveLength(8);
  });

  //* 3.- findBy... and findAllBy (use Promise)
  //* ---------------------------------------------------------------------------------
  //*              |      0 Matches     |     1 Match    | >1 Matches   | Async/Await
  //* ---------------------------------------------------------------------------------
  //* findBy...    |    Throw error     | Return Element | Throw error  |     Yes
  //* ---------------------------------------------------------------------------------
  //* findAllBy... |    Throw error     |  Return Array  | Return Array |     Yes
  //* ---------------------------------------------------------------------------------

  it('test #19 (findByRole): should get one specific element in the document', async () => {
    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /^Queries in React Testing Library$/
      })
    ).toBeInTheDocument();

    expect(
      await screen.findByRole('heading', {
        level: 2,
        name: /^1.- Types of Queries$/
      })
    ).toBeInTheDocument();
  });

  it('test #20 (findAllByRole): should get all specific elements in the document', async () => {
    expect(await screen.findAllByRole('heading')).toHaveLength(9);
    expect(await screen.findAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(await screen.findAllByRole('heading', { level: 2 })).toHaveLength(8);
    expect(await screen.findAllByRole('region')).toHaveLength(6);
    expect(await screen.findAllByRole('link')).toHaveLength(6);
  });
});
