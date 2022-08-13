//* ///////////////////////////////////////////////////////////////////////////
//* Firing Events Page
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
//* 4.1.- Main Styled
//* ---------------------------------------------------------------------------
const MainStyled = styled.main``;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.2.- Article Styled
//* ---------------------------------------------------------------------------
const ArticleStyled = styled.article``;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.3.- Section Styled
//* ---------------------------------------------------------------------------
const SectionStyled = styled.section`
  margin: 1rem 0;
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.4.- Header Styled
//* ---------------------------------------------------------------------------
const HeaderStyled = styled.header``;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.5.- H1 Styled
//* ---------------------------------------------------------------------------
const H1Styled = styled.h1`
  margin-bottom: 1rem;

  text-align: center;
  font-size: 3rem;
  color: ${COLORS.textWhite};
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.6.- H2 Styled
//* ---------------------------------------------------------------------------
const H2Styled = styled.h2`
  margin-bottom: 1rem;

  text-align: left;
  font-size: 2rem;
  color: ${COLORS.textWhite};
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.7.- H3 Styled
//* ---------------------------------------------------------------------------
const H3Styled = styled.h3`
  margin-bottom: 1rem;

  text-align: left;
  font-size: 1.8rem;
  color: ${COLORS.textWhite};
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.8.- H4 Styled
//* ---------------------------------------------------------------------------
const H4Styled = styled.h4`
  margin-bottom: 1rem;

  text-align: left;
  font-size: 1.6rem;
  color: ${COLORS.textWhite};
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.7.- P Styled
//* ---------------------------------------------------------------------------
const PStyled = styled.p`
  width: 90vw;
  margin-bottom: 0.5rem;

  text-align: left;
  font-size: 1.2rem;
  color: ${COLORS.textGray};
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.8.- A Styled
//* ---------------------------------------------------------------------------
const AStyled = styled.a`
  font-size: 1.2rem;
  text-decoration: none;
  color: ${COLORS.textBlueLight};

  transition: color 0.7s ease-in-out;

  &:hover {
    color: ${COLORS.redRTL};
  }
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.9.- Details Styled
//* ---------------------------------------------------------------------------
const Detailstyled = styled.details`
  & p {
    width: 70vw;
    margin: 0 4rem 0.2rem 3rem;
    padding: 0.5rem;
    border: 1px solid ${COLORS.textGray};
    border-radius: 5px;
  }
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.10.- Summary Styled
//* ---------------------------------------------------------------------------
const SummaryStyled = styled.summary`
  font-size: 1.2rem;
  color: ${COLORS.textWhite};
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.11.- Span Styled
//* ---------------------------------------------------------------------------
const SpanStyled = styled.span`
  font-size: 1.2rem;
  color: ${COLORS.textBlueDark};
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.12.- Code Styled
//* ---------------------------------------------------------------------------
const CodeStyled = styled.code`
  font-size: 1rem;
  color: ${COLORS.textBlueDark};
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.13.- Form Styled
//* ---------------------------------------------------------------------------
const FormStyled = styled.form`
  width: 90vw;
  padding: 1rem;
  font-size: 1rem;
  color: ${COLORS.textBlueDark};

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  border: 1px solid ${COLORS.textWhite};
  border-radius: 5px;
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.14.- Label Styled
//* ---------------------------------------------------------------------------
const LabelStyled = styled.label`
  margin-right: 0.5rem;
  font-size: 1.2rem;
  color: ${COLORS.textBlueDark};
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.14.- Input Styled
//* ---------------------------------------------------------------------------
const InputStyled = styled.input`
  margin-right: 0.5rem;
  padding: 0.25rem;

  font-size: 1rem;
  color: ${COLORS.textBlueDark};
  outline: none;
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.15.- Flex Container Styled
//* ---------------------------------------------------------------------------
const FlexContainerStyled = styled(DivFlexContainer)<IFlexContainerStyledProps>`
  max-width: 70vw;
  padding: 1rem;
  flex-direction: ${({ flexDirection }) =>
    flexDirection && flexDirection === 'row' ? 'row' : 'column'};
  border: 2px solid ${COLORS.textWhite};
  border-radius: 5px;
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.16.- Button Styled
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
export {
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
  Detailstyled,
  SummaryStyled,
  SpanStyled,
  CodeStyled,
  FormStyled,
  LabelStyled,
  InputStyled,
  FlexContainerStyled,
  ButtonStyled
};
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////
