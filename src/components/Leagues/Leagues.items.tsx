import * as React from "react";
import isEmpty from "lodash/isEmpty";
import axios from "axios";

import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { fetchCompetition } from "../../store/Leagues/leaguesSlice";
import League from "../../components/Leagues/League";
import Loading from "../Loading";
import { NotFindDataByFilter } from "../Filters";

interface ILeaguesItemsProps {}

const LeaguesItems: React.FunctionComponent<ILeaguesItemsProps> = (props) => {
  const leagues = useAppSelector((state) => state.leagues.leagues);
  const isFoundDataByFilter = useAppSelector((state) => state.leagues.isFoundDataByFilter);
  const searchText = useAppSelector((state) => state.search.searchText);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const abortController = axios.CancelToken.source();

    dispatch(fetchCompetition(abortController));

    return () => abortController.cancel();
  }, []);

  const regexp = new RegExp(`^${searchText}`, "gi");

  const LeaguesRender = () => {
    if (!isFoundDataByFilter) {
      return null;
    }
    return (
      <>
        {leagues.map(({ latestAvalibaleSeason, isVisible, ...rest }) => {
          if (searchText.trim() && !rest.league.match(regexp)) {
            return null;
          }
          if (isVisible) {
            return <League {...rest} key={rest.id} />;
          }
        })}
      </>
    );
  };

  return (
    <>
      {isEmpty(leagues) && <Loading />}
      {leagues.length > 0 && <LeaguesRender />}
      {!isFoundDataByFilter && <NotFindDataByFilter />}
    </>
  );
};

export default LeaguesItems;
