import { NavStyled, NavLinkStyled } from './StyledComponents';

export const Navbar = () => {
  return (
    <NavStyled>
      <NavLinkStyled to='/'>Home</NavLinkStyled>
      <NavLinkStyled to='/queries'>Queries</NavLinkStyled>
      <NavLinkStyled to='/userActions'>User Actions</NavLinkStyled>
    </NavStyled>
  );
};
