import { useState } from 'react';
import { FlexContainerStyled, H3Styled, ButtonStyled } from './StyledComponents';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const decrementOne = () => setCounter(counter => counter - 1);
  const resetCounter = () => setCounter(0);
  const incrementOne = () => setCounter(counter => counter + 1);

  return (
    <FlexContainerStyled border>
      <H3Styled>Counter: {counter}</H3Styled>
      <FlexContainerStyled flexDirection='row'>
        <ButtonStyled onClick={decrementOne}>-1</ButtonStyled>
        <ButtonStyled onClick={resetCounter}>Reset</ButtonStyled>
        <ButtonStyled onClick={incrementOne}>+1</ButtonStyled>
      </FlexContainerStyled>
    </FlexContainerStyled>
  );
};
