import { Navbar } from '../';

import {
  HeaderStyled,
  LogoAndCompanyNameLinkWrapper,
  LogoImage,
  CompanyName
} from './StyledComponents';

export const Header = () => {
  return (
    <HeaderStyled>
      <LogoAndCompanyNameLinkWrapper to='/'>
        <LogoImage />
        <CompanyName>Testing Library</CompanyName>
      </LogoAndCompanyNameLinkWrapper>

      <Navbar />
    </HeaderStyled>
  );
};
