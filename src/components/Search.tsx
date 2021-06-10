import * as React from "react";
import { onSetSearchText } from "../store/Search/searchSlice";
import { useAppDispatch } from "../hooks/redux";

import Container from "./layouts/Container/container";

interface ISearchProps {}

const Search: React.FunctionComponent<ISearchProps> = (props) => {
  const dispatch = useAppDispatch();

  return (
    <section className="search">
      <Container>
        <input
          type="text"
          placeholder="Write down which league you want to find"
          onChange={(e) => dispatch(onSetSearchText({ searchText: e.target.value }))}
        />
      </Container>
    </section>
  );
};

export default Search;
