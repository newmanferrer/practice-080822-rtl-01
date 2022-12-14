//* ///////////////////////////////////////////////////////////////////////////
//* Counter
//* ///////////////////////////////////////////////////////////////////////////
//* ===========================================================================
//* 1.- Imports
//* ===========================================================================
import styled from 'styled-components';
import { COLORS } from '../../colors';
//* ===========================================================================

//* ===========================================================================
//* 2.- Models / Interfaces
//* ===========================================================================
type TflexDirection = 'column' | 'row';

interface IFlexContainerStyledProps {
  flexDirection?: TflexDirection;
  border?: boolean;
}
//* ===========================================================================

//* ===========================================================================
//* 3.- Reusable Components
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 3.1.- Div Flex Container Styled
//* ---------------------------------------------------------------------------
const DivFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 4.- Used components
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 4.1.- H3 Styled
//* ---------------------------------------------------------------------------
const H3Styled = styled.h3`
  margin-bottom: 1rem;

  text-align: left;
  font-size: 1.8rem;
  color: ${COLORS.textWhite};
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.2.- Flex Container Styled
//* ---------------------------------------------------------------------------
const FlexContainerStyled = styled(DivFlexContainer)<IFlexContainerStyledProps>`
  max-width: 60vw;
  margin-bottom: 0.5rem;
  padding: 1rem;
  flex-direction: ${({ flexDirection }) =>
    flexDirection && flexDirection === 'row' ? 'row' : 'column'};
  border: ${({ border }) => (border ? `2px solid ${COLORS.textWhite}` : '2px solid transparent')};
  border-radius: 5px;
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.3.- Button Styled
//* ---------------------------------------------------------------------------
const ButtonStyled = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;

  color: ${COLORS.black};
  font-weight: bold;
  outline: none;
  transition: all 0.7s ease-in-out;

  border: none;
  border-radius: 3px;
  background-color: ${COLORS.redRTL};

  &:hover {
    cursor: pointer;
    background-color: ${COLORS.textBlueLight};
  }
`;
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 5.- Exported components
//* ===========================================================================
export { FlexContainerStyled, H3Styled, ButtonStyled };
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////
