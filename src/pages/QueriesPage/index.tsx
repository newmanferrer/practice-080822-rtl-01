import { Header, Footer } from '../../components';
import image from '../../assets/images/react-testing-library-octopus-128x128.png';
import {
  MainStyled,
  ArticleStyled,
  SectionStyled,
  HeaderStyled,
  H1Styled,
  H2Styled,
  PStyled,
  AStyled,
  Detailstyled,
  SummaryStyled,
  SpanStyled,
  FormStyled,
  LabelStyled,
  InputStyled
} from './StyledComponents';

export const QueriesPage = () => {
  return (
    <>
      <Header />
      <MainStyled>
        <ArticleStyled>
          <HeaderStyled>
            <H1Styled>Queries in React Testing Library</H1Styled>
            <PStyled>
              Queries are the methods that Testing Library gives you to find elements on the page.
            </PStyled>
            <AStyled
              href='https://testing-library.com/docs/queries/about/#overview'
              target='_blank'
              rel='noopener noreferrer'
            >
              RTL: docs queries
            </AStyled>
          </HeaderStyled>

          <SectionStyled role='region'>
            <HeaderStyled>
              <H2Styled>1.- Types of Queries</H2Styled>
            </HeaderStyled>
            <Detailstyled>
              <SummaryStyled>1.1.- Single Elements</SummaryStyled>
              <PStyled>
                <SpanStyled>getBy...:</SpanStyled> Returns the matching node for a query, and throw
                a descriptive error if no elements match or if more than one match is found .
              </PStyled>
              <PStyled>
                <SpanStyled>queryBy...:</SpanStyled> Returns the matching node for a query, and
                return null if no elements match. This is useful for asserting an element that is
                not present. Throws an error if more than one match is found.
              </PStyled>
              <PStyled>
                <SpanStyled>findBy...:</SpanStyled> Returns a Promise which resolves when an element
                is found which matches the given query. The promise is rejected if no element is
                found or if more than one element is found after a default timeout of 1000ms.
              </PStyled>
            </Detailstyled>
            <Detailstyled>
              <SummaryStyled>1.2.- Multiple Elements</SummaryStyled>
              <PStyled>
                <SpanStyled>getAllBy...:</SpanStyled> Returns an array of all matching nodes for a
                query, and throws an error if no elements match.
              </PStyled>
              <PStyled>
                <SpanStyled>queryAllBy...:</SpanStyled> Returns an array of all matching nodes for a
                query, and return an empty array ([]) if no elements match.
              </PStyled>
              <PStyled>
                <SpanStyled>findAllBy...:</SpanStyled> Returns a promise which resolves to an array
                of elements when any elements are found which match the given query. The promise is
                rejected if no elements are found after a default timeout of 1000ms.
              </PStyled>
            </Detailstyled>
          </SectionStyled>

          <SectionStyled role='region'>
            <HeaderStyled>
              <H2Styled>2.- Priority of Queries</H2Styled>
              <PStyled>
                Based on the Guiding Principles, your test should resemble how users interact with
                your code (component, page, etc.) as much as possible. With this in mind, we
                recommend this order of priority:
              </PStyled>
            </HeaderStyled>
            <Detailstyled>
              <SummaryStyled>2.1.- Queries Accessible to Everyone</SummaryStyled>
              <PStyled>
                <SpanStyled>getByRole:</SpanStyled> This can be used to query every element that is
                exposed in the accessibility tree. With the name option you can filter the returned
                elements by their accessible name. This should be your top preference for just about
                everything. There's not much you can't get with this (if you can't, it's possible
                your UI is inaccessible). Most often, this will be used with the name option.
              </PStyled>
              <PStyled>
                <SpanStyled>getByLabelText:</SpanStyled> This method is really good for form fields.
                When navigating through a website form, users find elements using label text. This
                method emulates that behavior, so it should be your top preference.
              </PStyled>
              <PStyled>
                <SpanStyled>getByPlaceholderText:</SpanStyled> A placeholder is not a substitute for
                a label. But if that's all you have, then it's better than alternatives.
              </PStyled>
              <PStyled>
                <SpanStyled>getByText:</SpanStyled> Outside of forms, text content is the main way
                users find elements. This method can be used to find non-interactive elements (like
                divs, spans, and paragraphs).
              </PStyled>
              <PStyled>
                <SpanStyled>getByDisplayValue:</SpanStyled> The current value of a form element can
                be useful when navigating a page with filled-in values.
              </PStyled>
            </Detailstyled>

            <Detailstyled>
              <SummaryStyled>2.2.- Semantic Queries</SummaryStyled>
              <PStyled>
                <SpanStyled>getByAltText:</SpanStyled> If your element is one which supports alt
                text (img, area, input, and any custom element), then you can use this to find that
                element.
              </PStyled>
              <PStyled>
                <SpanStyled>getByTitle:</SpanStyled> The title attribute is not consistently read by
                screenreaders, and is not visible by default for sighted users
              </PStyled>
              <PStyled>
                <SpanStyled>getByTestId:</SpanStyled> The user cannot see (or hear) these, so this
                is only recommended for cases where you can't match by role or text or it doesn't
                make sense (e.g. the text is dynamic).
              </PStyled>
            </Detailstyled>
          </SectionStyled>

          <SectionStyled role='region'>
            <HeaderStyled>
              <H2Styled>3.- Using Queries</H2Styled>
            </HeaderStyled>
            <PStyled>
              The base queries from DOM Testing Library require you to pass a container as the first
              argument. Most framework-implementations of Testing Library provide a pre-bound
              version of these queries when you render your components with them which means you do
              not have to provide a container. In addition, if you just want to query document.body
              then you can use the screen export (using screen is recommended).
            </PStyled>
            <PStyled>
              The primary argument to a query can be a string, regular expression, or function.
            </PStyled>
            <PStyled>
              For more detailed information it is recommended to look at the official documentation.
            </PStyled>
          </SectionStyled>

          <SectionStyled role='region'>
            <HeaderStyled>
              <H2Styled>4.- Examples</H2Styled>
            </HeaderStyled>
            <PStyled>
              To carry out practices related to the search for elements or nodes, I will use the{' '}
              <SpanStyled>index.test.tsx </SpanStyled>
              file, located on the route <SpanStyled>src/pages/QueriesPage/</SpanStyled>, please
              look at this file.
            </PStyled>
          </SectionStyled>

          <SectionStyled role='region'>
            <HeaderStyled>
              <H2Styled>5.- Form for examples getByLabelText</H2Styled>
            </HeaderStyled>
            <FormStyled role='form' aria-labelledby='form'>
              <LabelStyled htmlFor='name'>Name:</LabelStyled>
              <InputStyled
                type='text'
                name='name'
                id='name'
                alt='input name'
                title='input name'
                placeholder='name'
              />

              <LabelStyled htmlFor='lastName'>Last Name:</LabelStyled>
              <InputStyled
                type='text'
                name='lastName'
                id='lastName'
                alt='input last name'
                title='input last name'
                placeholder='last name'
              />
            </FormStyled>
          </SectionStyled>

          <SectionStyled role='region' data-testid='section image'>
            <HeaderStyled>
              <H2Styled>6.- Image for examples getByAltText</H2Styled>
            </HeaderStyled>
            <img src={image} alt='image octopus' title='image octopus' />
          </SectionStyled>
        </ArticleStyled>
      </MainStyled>
      <Footer />
    </>
  );
};
