import React, { useState } from 'react';
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
  CodeStyled,
  FlexContainerStyled,
  ButtonStyled,
  FormStyled,
  LabelStyled,
  InputStyled,
  SelectStyled
} from './StyledComponents';

interface IInitialStateForm {
  name: string;
  lastName: string;
}

const initialStateForm: IInitialStateForm = {
  name: 'Newman',
  lastName: 'Ferrer'
};

export const UserInteractionsPage = () => {
  const [counter, setCounter] = useState(0);
  const [form, setForm] = useState(initialStateForm);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Submit');
  };

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

          <SectionStyled>
            <HeaderStyled>
              <H2Styled>11.- Examples</H2Styled>
            </HeaderStyled>
            <PStyled>
              To carry out practices related to the <SpanStyled>User Interactions</SpanStyled>, I
              will use the <SpanStyled>index.test.tsx</SpanStyled> file, located on the route
              <SpanStyled> src/pages/UserInteractionsPage/</SpanStyled>, please look at this file.
            </PStyled>
          </SectionStyled>

          <SectionStyled>
            <HeaderStyled>
              <H2Styled>12.- Counter for examples</H2Styled>
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

          <SectionStyled role='region'>
            <HeaderStyled>
              <H2Styled>13.- Form for examples</H2Styled>
            </HeaderStyled>
            <FormStyled role='form' aria-labelledby='form' onSubmit={handleSubmit}>
              <LabelStyled htmlFor='name'>Name:</LabelStyled>
              <InputStyled
                type='text'
                name='name'
                value={form.name}
                id='name'
                alt='input name'
                title='input name'
                placeholder='name'
                onChange={handleChange}
              />

              <LabelStyled htmlFor='lastName'>Last Name:</LabelStyled>
              <InputStyled
                type='text'
                name='lastName'
                value={form.lastName}
                id='lastName'
                alt='input last name'
                title='input last name'
                placeholder='last name'
                onChange={handleChange}
              />

              <ButtonStyled type='submit'>Send</ButtonStyled>
            </FormStyled>
          </SectionStyled>

          <SectionStyled>
            <HeaderStyled>
              <H2Styled>14.- Select multiple for examples</H2Styled>
            </HeaderStyled>
            <FlexContainerStyled>
              <SelectStyled multiple>
                <option value='A'>A</option>
                <option value='B'>B</option>
                <option value='C'>C</option>
              </SelectStyled>
            </FlexContainerStyled>
          </SectionStyled>
        </SectionStyled>
      </MainStyled>
      <Footer />
    </>
  );
};
