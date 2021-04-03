import styled from "styled-components";

export const StyledItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  padding: 3px 10px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: #0002;
  }
`;
