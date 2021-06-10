import * as React from "react";
import { BiFilter } from "react-icons/bi";
import cn from "classnames";
import { useHistory, useParams } from "react-router-dom";

import { setQuery } from "../utils/query";
import { useAppDispatch } from "../hooks/redux";
import { onFilterLeaguesBySeason } from "../store/Leagues/leaguesSlice";
import "./styles/Filters.scss";

export interface IFiltersProps {
  className?: string;
}

export const NotFindDataByFilter = () => {
  return <p>Sorry, no data was found for this filter, try something else</p>;
};

const Filters: React.FunctionComponent<IFiltersProps> = (props) => {
  const dispatch = useAppDispatch();
  const currentYear = new Date().getFullYear();
  const history = useHistory();
  const { seasonYear } = useParams<{ seasonYear: string }>();
  const season = new URLSearchParams(history.location.search).get("season");

  let selectedSeason: number;
  if (season) {
    selectedSeason = +season;
  } else if (seasonYear) {
    selectedSeason = +seasonYear;
  } else {
    selectedSeason = currentYear;
  }

  const rangeOptionsYear = [];
  for (let i = currentYear; i >= 2018; i--) {
    rangeOptionsYear.push(i);
  }

  const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(onFilterLeaguesBySeason({ selectedYear: +e.target.value }));
    setQuery(history, { season: e.target.value });
  };

  return (
    <div className={cn("filters", { [props.className!]: props.className })}>
      <div className="filters__title">
        <span>Filter</span>
        <BiFilter />
      </div>
      <div className="filters__items">
        <div className="filters__item filters__item--select">
          <label htmlFor="select">Choose a year: </label>
          <select id="select" onChange={(e) => selectChangeHandler(e)}>
            {rangeOptionsYear.map((year) => {
              const selected = year === selectedSeason;
              return (
                <option value={year} key={year} selected={selected}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
