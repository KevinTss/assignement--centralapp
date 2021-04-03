import Layout from "../components/layout";

import { StyledPageContainer } from "../styles";
import HomeHeader from "../components/home-header";

const HomePage = ({ savedItems, updateItems }) => {
  const onItemAdd = (newItem) => {
    const isItemAlreadyAdded =
      savedItems.findIndex((item) => item.id === newItem.id) >= 0;

    if (!isItemAlreadyAdded) {
      updateItems([...savedItems, newItem]);
    }
  };
  const onItemRemove = (itemId) => {
    const itemIndex = savedItems.findIndex((item) => item.id === itemId);

    if (itemIndex >= 0) {
      const newItems = [...savedItems];
      newItems.splice(itemIndex, 1);
      updateItems(newItems);
    }
  };

  return (
    <Layout savedItems={savedItems} removeItem={onItemRemove}>
      <StyledPageContainer>
        <HomeHeader saveItem={onItemAdd} />
      </StyledPageContainer>
    </Layout>
  );
};

export default HomePage;
