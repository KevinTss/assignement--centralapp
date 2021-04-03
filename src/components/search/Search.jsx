import { useEffect, useState } from "react";
import throttle from "lodash.throttle";
import queryString from "query-string";

import { StyledContainer, StyledResults } from "./style";
import SuggestedItem from "./suggested-item";
import { Input } from "../ui";
import api from "../../api";

const Search = ({ saveItem }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [results, setResults] = useState([]);

  const handleClick = () => {
    console.log("is open?");
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);

  const fetchResults = (value) => {
    const query = {
      language: "en",
      level: "L0",
      name: value,
    };

    api
      .get(`categories/like?${queryString.stringify(query)}`)
      .then(({ data }) => {
        setIsFetching(false);
        setResults([
          ...data.map((item) => ({
            name: item.name,
            path: item.path,
            id: item.id,
          })),
        ]);
      })
      .catch(() => setIsFetching(false));
  };

  const onSearch = throttle(({ target: { value } }) => {
    if (value.length >= 3) {
      setIsFetching(true);
      fetchResults(value);
    } else {
      setResults([]);
    }
  }, 500);

  return (
    <StyledContainer>
      <Input onChange={onSearch} placeholder="Search" />
      <StyledResults isVisible={!isFetching && results.length}>
        {results.map((item) => (
          <SuggestedItem
            key={item.id}
            item={item}
            onClick={() => saveItem(item)}
          />
        ))}
      </StyledResults>
    </StyledContainer>
  );
};

export default Search;
