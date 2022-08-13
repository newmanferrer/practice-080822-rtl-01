import { useState } from 'react';
import { Header, Footer } from '../../components';
import {
  MainStyled,
  SectionStyled,
  HeaderStyled,
  H1Styled,
  H2Styled,
  H3Styled,
  PStyled,
  AStyled,
  SpanStyled,
  FlexContainerStyled,
  ButtonStyled
} from './StyledComponents';

export const UserActionsPage = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Header />
      <MainStyled>
        <SectionStyled>
          <HeaderStyled>
            <H1Styled>User Actions</H1Styled>
          </HeaderStyled>

          <SectionStyled>
            <HeaderStyled>
              <H2Styled>1.- Firing events</H2Styled>
            </HeaderStyled>
            <PStyled>
              Most projects have a few use cases for fireEvent, but the majority of the time you
              should probably use:{' '}
              <AStyled
                href='https://testing-library.com/docs/user-event/intro'
                target='_blank'
                rel='noopener noreferrer'
              >
                @testing-library/user-event
              </AStyled>
            </PStyled>
            <AStyled
              href='https://testing-library.com/docs/dom-testing-library/api-events'
              target='_blank'
              rel='noopener noreferrer'
            >
              RTL: docs firing events
            </AStyled>
          </SectionStyled>

          <SectionStyled>
            <HeaderStyled>
              <H2Styled>2.- Async Methods</H2Styled>
            </HeaderStyled>
            <PStyled>
              Several utilities are provided for dealing with asynchronous code. These can be useful
              to wait for an element to appear or disappear in response to an event, user action,
              timeout, or Promise. The async methods return Promises, so be sure to use await or
              .then when calling them.
            </PStyled>
            <AStyled
              href='https://testing-library.com/docs/dom-testing-library/api-async'
              target='_blank'
              rel='noopener noreferrer'
            >
              RTL: docs Async Methoks
            </AStyled>
          </SectionStyled>

          <SectionStyled>
            <HeaderStyled>
              <H2Styled>3.- Appearance and Disappearance</H2Styled>
            </HeaderStyled>
            <PStyled>
              Sometimes you need to test that an element is present and then disappears or vice
              versa.
            </PStyled>
            <PStyled>
              If you need to wait for an element to appear, the async wait utilities allow you to
              wait for an assertion to be satisfied before proceeding. The wait utilities retry
              until the query passes or times out. The async methods return a Promise, so you must
              always use await or .then(done) when calling them.
            </PStyled>
            <AStyled
              href='https://testing-library.com/docs/guide-disappearance'
              target='_blank'
              rel='noopener noreferrer'
            >
              RTL: docs Appearance and Disappearance
            </AStyled>
          </SectionStyled>

          <SectionStyled>
            <HeaderStyled>
              <H2Styled>4.- Considerations for fireEvent</H2Styled>
            </HeaderStyled>
            <PStyled>
              For detailed information on this topic you can follow the following link.
            </PStyled>
            <AStyled
              href='https://testing-library.com/docs/guide-events'
              target='_blank'
              rel='noopener noreferrer'
            >
              RTL: docs Considerations for fireEvent
            </AStyled>
          </SectionStyled>

          <SectionStyled>
            <HeaderStyled>
              <H2Styled>5.- Using Fake Timers</H2Styled>
            </HeaderStyled>
            <PStyled>
              For detailed information on this topic you can follow the following link.
            </PStyled>
            <AStyled
              href='https://testing-library.com/docs/using-fake-timers'
              target='_blank'
              rel='noopener noreferrer'
            >
              RTL: docs Using Fake Timers
            </AStyled>
          </SectionStyled>

          <SectionStyled>
            <HeaderStyled>
              <H2Styled>6.- Examples</H2Styled>
            </HeaderStyled>
            <PStyled>
              To carry out practices related to the <SpanStyled>User Actions</SpanStyled>, I will
              use the <SpanStyled>index.test.tsx</SpanStyled> file, located on the route{' '}
              <SpanStyled>src/pages/UserActionsPage/</SpanStyled>, please look at this file.
            </PStyled>
          </SectionStyled>

          <SectionStyled>
            <HeaderStyled>
              <H2Styled>7.- Counter for examples</H2Styled>
            </HeaderStyled>
            <FlexContainerStyled flexDirection='column'>
              <H3Styled>Counter: {counter}</H3Styled>
              <FlexContainerStyled flexDirection='row'>
                <ButtonStyled onClick={() => setCounter(counter - 1)}>-1</ButtonStyled>
                <ButtonStyled onClick={() => setCounter(0)}>Reset</ButtonStyled>
                <ButtonStyled onClick={() => setCounter(counter + 1)}>+1</ButtonStyled>
              </FlexContainerStyled>
            </FlexContainerStyled>
          </SectionStyled>
        </SectionStyled>
      </MainStyled>
      <Footer />
    </>
  );
};
