import * as React from "react";
import { BiSearchAlt } from "react-icons/bi";

import { onSetSearchText } from "../store/Search/searchSlice";
import { useAppDispatch } from "../hooks/redux";
import "./styles/Search.scss";
import Container from "./layouts/Container/container";

interface ISearchProps {}

const Search: React.FunctionComponent<ISearchProps> = (props) => {
  const dispatch = useAppDispatch();

  return (
    <section className="search">
      <Container>
        <div className="search__wrapper">
          <input
            type="text"
            placeholder="Type to search league"
            onChange={(e) => dispatch(onSetSearchText({ searchText: e.target.value }))}
            className="search__input"
          />
          <BiSearchAlt />
        </div>
      </Container>
    </section>
  );
};

export default Search;
