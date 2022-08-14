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

export const UserInteractionsPage = () => {
  return (
    <>
      <Header />
      <MainStyled>
        <SectionStyled>
          <HeaderStyled>
            <H1Styled>User Interactions</H1Styled>
          </HeaderStyled>

          <SectionStyled>
            <HeaderStyled>
              <H2Styled>1.- Introduction</H2Styled>
            </HeaderStyled>
            <PStyled>
              <SpanStyled>user-event</SpanStyled> is a companion library for Testing Library that
              simulates user interactions by dispatching the events that would happen if the
              interaction took place in a browser. For more details follow the next link.
            </PStyled>
            <AStyled
              href='https://testing-library.com/docs/user-event/intro'
              target='_blank'
              rel='noopener noreferrer'
            >
              RTL: docs Introduction
            </AStyled>
          </SectionStyled>

          <SectionStyled>
            <HeaderStyled>
              <H2Styled>2.- instalation</H2Styled>
            </HeaderStyled>
            <PStyled>
              <CodeStyled>yarn add --dev @testing-library/user-event</CodeStyled>
            </PStyled>
            <PStyled>
              Note: that <SpanStyled>@testing-library/user-event</SpanStyled> requires
              <SpanStyled> @testing-library/dom</SpanStyled>.
            </PStyled>
            <PStyled>For more details follow the next link.</PStyled>
            <AStyled
              href='https://testing-library.com/docs/user-event/install'
              target='_blank'
              rel='noopener noreferrer'
            >
              RTL: docs Installation
            </AStyled>
          </SectionStyled>

          <SectionStyled>
            <HeaderStyled>
              <H2Styled>3.- Setup</H2Styled>
            </HeaderStyled>
            <PStyled>For more details follow the next link.</PStyled>
            <AStyled
              href='https://testing-library.com/docs/user-event/setup'
              target='_blank'
              rel='noopener noreferrer'
            >
              RTL: docs Setup
            </AStyled>
          </SectionStyled>

          <SectionStyled>
            <HeaderStyled>
              <H2Styled>4.- Options</H2Styled>
            </HeaderStyled>
            <PStyled>For more details follow the next link.</PStyled>
            <AStyled
              href='https://testing-library.com/docs/user-event/options'
              target='_blank'
              rel='noopener noreferrer'
            >
              RTL: docs Options
            </AStyled>
          </SectionStyled>

          <SectionStyled>
            <HeaderStyled>
              <H2Styled>5.- Pointer</H2Styled>
            </HeaderStyled>
            <PStyled>For more details follow the next link.</PStyled>
            <AStyled
              href='https://testing-library.com/docs/user-event/pointer'
              target='_blank'
              rel='noopener noreferrer'
            >
              RTL: docs Pointer
            </AStyled>
          </SectionStyled>

          <SectionStyled>
            <HeaderStyled>
              <H2Styled>6.- Keyboard</H2Styled>
            </HeaderStyled>
            <PStyled>For more details follow the next link.</PStyled>
            <AStyled
              href='https://testing-library.com/docs/user-event/keyboard'
              target='_blank'
              rel='noopener noreferrer'
            >
              RTL: docs Keyboard
            </AStyled>
          </SectionStyled>

          <SectionStyled>
            <HeaderStyled>
              <H2Styled>7.- Clipboard</H2Styled>
            </HeaderStyled>
            <PStyled>For more details follow the next link.</PStyled>
            <AStyled
              href='https://testing-library.com/docs/user-event/clipboard'
              target='_blank'
              rel='noopener noreferrer'
            >
              RTL: docs Clipboard
            </AStyled>
          </SectionStyled>

          <SectionStyled>
            <HeaderStyled>
              <H2Styled>8.- Utility APIs</H2Styled>
            </HeaderStyled>
            <PStyled>For more details follow the next link.</PStyled>
            <AStyled
              href='https://testing-library.com/docs/user-event/utility'
              target='_blank'
              rel='noopener noreferrer'
            >
              RTL: docs Utility APIs
            </AStyled>
          </SectionStyled>

          <SectionStyled>
            <HeaderStyled>
              <H2Styled>9.- Convenience APIs</H2Styled>
            </HeaderStyled>
            <PStyled>For more details follow the next link.</PStyled>
            <AStyled
              href='https://testing-library.com/docs/user-event/convenience'
              target='_blank'
              rel='noopener noreferrer'
            >
              RTL: docs Convenience APIs
            </AStyled>
          </SectionStyled>

          <SectionStyled>
            <HeaderStyled>
              <H2Styled>10.- user-event v13</H2Styled>
            </HeaderStyled>
            <PStyled>For more details follow the next link.</PStyled>
            <AStyled
              href='https://testing-library.com/docs/ecosystem-user-event'
              target='_blank'
              rel='noopener noreferrer'
            >
              RTL: docs user-event v13
            </AStyled>
          </SectionStyled>
        </SectionStyled>
      </MainStyled>
      <Footer />
    </>
  );
};
