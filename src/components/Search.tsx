import * as React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useLocation, useHistory } from "react-router-dom";

import { setQuery, getQuery } from "../utils/query";
import { onSetSearchText } from "../store/Search/searchSlice";
import { useAppDispatch } from "../hooks/redux";
import "./styles/Search.scss";
import Container from "./layouts/Container/container";

interface ISearchProps {}

const Search: React.FunctionComponent<ISearchProps> = (props) => {
  const dispatch = useAppDispatch();
  const { pathname, search } = useLocation();
  const history = useHistory();

  const placeholderType = pathname === "/" ? "league" : "team";

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(onSetSearchText({ searchText: e.target.value }));
    setQuery(history, { enteredText: e.target.value });
  };

  return (
    <section className="search">
      <Container>
        <div className="search__wrapper">
          <input
            type="text"
            placeholder={`Type to search ${placeholderType}`}
            onChange={(e) => changeInputHandler(e)}
            value={getQuery(history, "enteredText") || ""}
            className="search__input"
          />
          <BiSearchAlt />
        </div>
      </Container>
    </section>
  );
};

export default Search;
