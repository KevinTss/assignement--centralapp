import { StyledContainer, StyledLeftBox, StyledRightBox } from "./style";
import Search from "../search";
import { Title, Image } from "../ui";
import illustrationUrl from "../../assets/finder-illustration.svg";

const HomeHeader = () => (
  <StyledContainer>
    <StyledLeftBox>
      <Title>Search all you need</Title>
      <Search />
    </StyledLeftBox>
    <StyledRightBox>
      <Image src={illustrationUrl} alt="main illustration" />
    </StyledRightBox>
  </StyledContainer>
);

export default HomeHeader;
