import { useState } from "react";
import HomePage from "./pages/HomePage";

const App = () => {
  const [savedItems, setSavedItems] = useState([]);

  return <HomePage savedItems={savedItems} updateItems={setSavedItems} />;
};

export default App;
