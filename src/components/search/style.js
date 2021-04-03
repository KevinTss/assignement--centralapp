import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 50px 0;
  position: relative;
`;

export const StyledResults = styled.div`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  height: ${({ isVisible }) => (isVisible ? "auto" : "0")};
  flex-direction: column;
  width: 100%;
  max-height: 400px;
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  background-color: white;
  border-radius: 20px;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 15px 45px 0 rgba(0, 0, 0, 0.15);
`;
