import Layout from "../components/layout";

import { StyledPageContainer } from "../styles";
import Search from "../components/search";

const HomePage = () => {
  return (
    <Layout>
      <StyledPageContainer>
        <Search />
      </StyledPageContainer>
    </Layout>
  );
};

export default HomePage;
