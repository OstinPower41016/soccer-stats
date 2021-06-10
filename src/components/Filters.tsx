import * as React from "react";
import { BiFilter } from "react-icons/bi";
import cn from "classnames";

import { useAppDispatch } from "../hooks/redux";
import { onFilterLeaguesBySeason } from "../store/Leagues/leaguesSlice";
import "./styles/Filters.scss";

interface IFiltersProps {
  className?: string;
}

export const NotFindDataByFilter = () => {
  return <p>Sorry, no data was found for this filter, try something else</p>;
};

const Filters: React.FunctionComponent<IFiltersProps> = (props) => {
  const dispatch = useAppDispatch();
  const currentYear = new Date().getFullYear();
  const rangeOptionsYear = [];
  for (let i = currentYear; i >= 1970; i--) {
    rangeOptionsYear.push(i);
  }

  return (
    <div className={cn("filters", { [props.className!]: props.className })}>
      <div className="filters__title">
        <span>Filter</span>
        <BiFilter />
      </div>
      <div className="filters__items">
        <div className="filters__item filters__item--select">
          <label htmlFor="select">Choose a year: </label>
          <select
            id="select"
            onChange={(e) => dispatch(onFilterLeaguesBySeason({ selectedYear: +e.target.value }))}
          >
            {rangeOptionsYear.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
