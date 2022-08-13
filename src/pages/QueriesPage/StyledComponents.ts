//* ///////////////////////////////////////////////////////////////////////////
//* Queries Page
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
//* ===========================================================================

//* ===========================================================================
//* 3.- Reusable Components
//* ===========================================================================
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
  PStyled,
  AStyled,
  Detailstyled,
  SummaryStyled,
  SpanStyled,
  CodeStyled,
  FormStyled,
  LabelStyled,
  InputStyled
};
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////
