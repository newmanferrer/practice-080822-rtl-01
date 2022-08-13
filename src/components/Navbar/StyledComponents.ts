//* ///////////////////////////////////////////////////////////////////////////
//* Navbar
//* ///////////////////////////////////////////////////////////////////////////
//* ===========================================================================
//* 1.- Imports
//* ===========================================================================
import { NavLink } from 'react-router-dom';
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
//* ---------------------------------------------------------------------------
//* 3.1.-
//* ---------------------------------------------------------------------------
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 4.- Used components
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 4.1.- NavStyled
//* ---------------------------------------------------------------------------
const NavStyled = styled.nav`
  width: 23rem;
  margin-right: 1rem;
  padding: 0.5rem 1rem;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.2.- NavLinkStyled
//* ---------------------------------------------------------------------------
const NavLinkStyled = styled(NavLink).attrs({
  className: ({ isActive }) => (isActive ? 'active' : '')
})`
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 3px;
  text-decoration: none;
  color: ${COLORS.redRTL};

  transition: color 0.7s ease-in-out;

  &:hover {
    color: ${COLORS.textBlueLight};
  }

  &.active {
    text-decoration-style: double;
    text-decoration-line: underline;
    text-underline-offset: 0.4rem;
    text-decoration-color: ${COLORS.textBlueDark};
  }
`;
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 5.- Exported components
//* ===========================================================================
export { NavStyled, NavLinkStyled };
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////
