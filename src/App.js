import { useState } from "react";
import debounce from "lodash.debounce";
import queryString from "query-string";

import api from "./api";

const App = () => {
  const [results, setResults] = useState([]);

  const onSearch = debounce(({ target: { value } }) => {
    console.log("kok", value);
    const query = {
      language: "en",
      level: "L0",
      name: value,
    };

    if (value.length >= 3) {
      api.get(`categories/like?${queryString.stringify(query)}`).then((r) => {
        setResults([...r.data.map((el) => ({ name: el.name, path: el.path }))]);
      });
    }
  }, 500);

  return (
    <div className="App">
      <input onChange={onSearch} />
      <div>{JSON.stringify(results)}</div>
    </div>
  );
};

export default App;
