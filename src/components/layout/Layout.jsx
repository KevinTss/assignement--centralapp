import { StyledHeader, StyledFooter } from "./style";
import GlobalStyle from "../../styles/GlobalStyle";

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <StyledHeader>logo</StyledHeader>
    {children}
    <StyledFooter>footer</StyledFooter>
  </>
);

export default Layout;
