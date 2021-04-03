import styled from "styled-components";

export const StyledContainer = styled.section`
  display: flex;
  width: 90%;
  max-width: 90%;
  margin: auto;

  @media (max-width: 800px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const StyledLeftBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;

  @media (max-width: 800px) {
    width: 100%;
    order: 2;
    align-items: center;
    margin-top: 30px;
  }
`;

export const StyledRightBox = styled.div`
  display: flex;
  width: 50%;

  @media (max-width: 800px) {
    width: 100%;
    order: 1;
    /* align-items: center; */
  }
`;
