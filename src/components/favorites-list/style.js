import styled from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  margin: 0 20px;
`;

export const StyledFavoriteButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const StyledList = styled.div`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  height: ${({ isVisible }) => (isVisible ? "auto" : "0")};
  flex-direction: column;
  flex-direction: column;
  min-width: 100%;
  max-height: 400px;
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  background-color: white;
  border-radius: 20px;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 15px 45px 0 rgba(0, 0, 0, 0.15);
`;

export const StyledCounter = styled(({ isVisible, ...props }) => (
  <div {...props} />
))`
  position: absolute;
  bottom: 0;
  left: 0;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  font-size: 10px;
  background-color: red;
  border-radius: 50%;
  padding: 3px 5px;
  color: white;
  font-weight: bold;
`;

export const StyledItem = styled.div`
  padding: 3px 5px;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: #0002;
  }
`;
