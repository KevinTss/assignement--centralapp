import Layout from "../components/layout";

import { StyledPageContainer } from "../styles";
import HomeHeader from "../components/home-header";

const HomePage = () => {
  return (
    <Layout>
      <StyledPageContainer>
        <HomeHeader />
      </StyledPageContainer>
    </Layout>
  );
};

export default HomePage;
