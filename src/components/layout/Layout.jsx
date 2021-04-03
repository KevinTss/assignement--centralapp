import { StyledHeader, StyledLogoImage } from "./style";
import GlobalStyle from "../../styles/GlobalStyle";
import logoUrl from "../../assets/logo.png";
import Head from "../head";
import FavoritesList from "../favorites-list";

const Layout = ({ children, savedItems, removeItem }) => (
  <>
    <GlobalStyle />
    <Head />
    <StyledHeader>
      <StyledLogoImage src={logoUrl} alt="finder logo" />
      <FavoritesList savedItems={savedItems} removeItem={removeItem} />
    </StyledHeader>
    {children}
  </>
);

export default Layout;
