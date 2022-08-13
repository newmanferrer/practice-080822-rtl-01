import { Header, Footer } from '../../components';
import {
  MainStyled,
  ArticleStyled,
  SectionStyled,
  HeaderStyled,
  H1Styled,
  H2Styled,
  H3Styled,
  H4Styled,
  PStyled,
  AStyled,
  SpanStyled,
  CodeStyled,
  LinkStyled
} from './StyledComponents';

export const HomePage = () => {
  return (
    <>
      <Header />
      <MainStyled>
        <ArticleStyled>
          <HeaderStyled>
            <H1Styled>Learning React Testing Library</H1Styled>
            <H2Styled>Practice No. 1</H2Styled>
            <PStyled>
              React Testing Library builds on top of DOM Testing Library by adding APIs for working
              with React components.
            </PStyled>
            <PStyled>
              Projects created with Create React App have out of the box support for React Testing
              Library. If that is not the case, you can add it via <SpanStyled>yarn </SpanStyled>
              like so: <CodeStyled>yarn add --dev @testing-library/react</CodeStyled>
            </PStyled>
            <AStyled
              href='https://testing-library.com/docs/react-testing-library/intro/'
              target='_blank'
              rel='noopener noreferrer'
            >
              RTL: docs intro
            </AStyled>
          </HeaderStyled>

          <SectionStyled>
            <HeaderStyled>
              <H3Styled>1.- Queries</H3Styled>
            </HeaderStyled>
            <PStyled>
              Go to <LinkStyled to='/queries'>Queries page</LinkStyled> , to study what is related
              to queries and practice the different ways and methods we have to find our node or
              elements.
            </PStyled>
          </SectionStyled>

          <SectionStyled>
            <HeaderStyled>
              <H3Styled>2.- Users Actions</H3Styled>
            </HeaderStyled>
            <SectionStyled>
              <PStyled>
                Go to <LinkStyled to='/UserActions'>User Actions page</LinkStyled> , to study what
                is related to firing events and practice the different methods that we can use.
              </PStyled>
            </SectionStyled>
          </SectionStyled>

          <SectionStyled>
            <HeaderStyled>
              <H3Styled>3.- Advanced</H3Styled>
            </HeaderStyled>

            <SectionStyled>
              <HeaderStyled>
                <H4Styled>3.1.- Accessibility</H4Styled>
              </HeaderStyled>
              <PStyled>
                Some interesting methods could be <SpanStyled>getRoles</SpanStyled>, this function
                allows iteration over the implicit ARIA roles represented in a given tree of DOM
                nodes.
              </PStyled>
              <PStyled>
                We can also find <SpanStyled>isInaccessible</SpanStyled> and{' '}
                <SpanStyled>logRoles</SpanStyled>
              </PStyled>
              <AStyled
                href='https://testing-library.com/docs/dom-testing-library/api-accessibility'
                target='_blank'
                rel='noopener noreferrer'
              >
                RTL: docs Accessibility
              </AStyled>
            </SectionStyled>

            <SectionStyled>
              <HeaderStyled>
                <H4Styled>3.2.- Custom Queries</H4Styled>
              </HeaderStyled>
              <PStyled>
                Some interesting methods could be <SpanStyled>getNodeText</SpanStyled>.
              </PStyled>
              <AStyled
                href='https://testing-library.com/docs/dom-testing-library/api-custom-queries'
                target='_blank'
                rel='noopener noreferrer'
              >
                RTL: docs Custom Queries
              </AStyled>
            </SectionStyled>

            <SectionStyled>
              <HeaderStyled>
                <H4Styled>3.3.- Debugging</H4Styled>
              </HeaderStyled>
              <PStyled>
                When you use any get calls in your test cases, the current state of the container
                (DOM) gets printed on the console.
              </PStyled>
              <PStyled>
                Some interesting methods could be <SpanStyled>prettyDOM</SpanStyled>,
                <SpanStyled> logRoles</SpanStyled>, and <SpanStyled>console.log</SpanStyled>.
              </PStyled>
              <AStyled
                href='https://testing-library.com/docs/dom-testing-library/api-debugging'
                target='_blank'
                rel='noopener noreferrer'
              >
                RTL: docs Debugging
              </AStyled>
            </SectionStyled>

            <SectionStyled>
              <HeaderStyled>
                <H4Styled>3.4.- Querying Within Elements</H4Styled>
              </HeaderStyled>
              <AStyled
                href='https://testing-library.com/docs/dom-testing-library/api-within'
                target='_blank'
                rel='noopener noreferrer'
              >
                RTL: docs Querying Within Elements
              </AStyled>
            </SectionStyled>

            <SectionStyled>
              <HeaderStyled>
                <H4Styled>3.5.- Configuration Options</H4Styled>
              </HeaderStyled>
              <AStyled
                href='https://testing-library.com/docs/dom-testing-library/api-configuration'
                target='_blank'
                rel='noopener noreferrer'
              >
                RTL: docs Configuration Options
              </AStyled>
            </SectionStyled>
          </SectionStyled>

          <SectionStyled>
            <HeaderStyled>
              <H3Styled>4.- User Interactions</H3Styled>
            </HeaderStyled>
          </SectionStyled>
        </ArticleStyled>
      </MainStyled>
      <Footer />
    </>
  );
};
