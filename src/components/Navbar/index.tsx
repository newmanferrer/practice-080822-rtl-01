import { NavStyled, NavLinkStyled } from './StyledComponents';

export const Navbar = () => {
  return (
    <NavStyled>
      <NavLinkStyled to='/'>Home</NavLinkStyled>
      <NavLinkStyled to='/queries'>Queries</NavLinkStyled>
      <NavLinkStyled to='/userActions'>User Actions</NavLinkStyled>
      <NavLinkStyled to='/userInteractions'>User Interactions</NavLinkStyled>
    </NavStyled>
  );
};
