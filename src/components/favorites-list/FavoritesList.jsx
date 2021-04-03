import {
  StyledContainer,
  StyledFavoriteButton,
  StyledList,
  StyledItem,
  StyledCounter,
} from "./style";
import { Text } from "../ui";
import HeartIconUrl from "../../assets/heart.svg";
import { useState } from "react";

const FavoritesList = ({ savedItems, removeItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledContainer>
      <StyledFavoriteButton onClick={() => setIsOpen(!isOpen)}>
        <img alt="favorite-logo" src={HeartIconUrl} />
      </StyledFavoriteButton>
      <StyledCounter isVisible={!!savedItems.length && !isOpen}>
        <Text size="xs" isWhite>
          {savedItems.length}
        </Text>
      </StyledCounter>
      <StyledList isVisible={isOpen && savedItems.length}>
        {savedItems.map((item) => (
          <StyledItem
            key={item.id}
            onClickCapture={(e) => {
              e.stopPropagation();
              removeItem(item.id);
            }}
          >
            {item.name}
          </StyledItem>
        ))}
      </StyledList>
    </StyledContainer>
  );
};

export default FavoritesList;
