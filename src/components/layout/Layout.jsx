import { StyledHeader, StyledLogoImage, StyledFooter } from "./style";
import GlobalStyle from "../../styles/GlobalStyle";
import logoUrl from "../../assets/logo.png";
import Head from "../head";

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Head />
    <StyledHeader>
      <StyledLogoImage src={logoUrl} alt="finder logo" />
    </StyledHeader>
    {children}
    <StyledFooter>footer</StyledFooter>
  </>
);

export default Layout;
