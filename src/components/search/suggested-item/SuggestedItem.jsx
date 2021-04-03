import { StyledItemContainer } from "./style";

import { Text } from "../../ui";

const SuggestedItem = ({ item, onClick }) => (
  <StyledItemContainer onClick={onClick}>
    <Text>{item.name}</Text>
    <Text size="s">{item.path}</Text>
  </StyledItemContainer>
);

export default SuggestedItem;
