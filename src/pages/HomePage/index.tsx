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
              <HeaderStyled>
                <H4Styled>2.1.- Firing Events</H4Styled>
              </HeaderStyled>
              <PStyled>
                Go to <LinkStyled to='/firingEvents'>Firing Events page</LinkStyled> , to study what
                is related to firing events and practice the different methods that we can use.
              </PStyled>
            </SectionStyled>
          </SectionStyled>
        </ArticleStyled>
      </MainStyled>
      <Footer />
    </>
  );
};
