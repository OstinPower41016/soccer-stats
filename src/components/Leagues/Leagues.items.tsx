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
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const abortController = axios.CancelToken.source();

    dispatch(fetchCompetition(abortController));

    return () => abortController.cancel();
  }, []);

  return (
    <>
      {isEmpty(leagues) && <Loading />}
      {leagues.length &&
        leagues.map(({ latestAvalibaleSeason, isVisible, ...rest }) => {
          if (isVisible) {
            return <League {...rest} key={rest.id} />;
          }
        })}
      {!isFoundDataByFilter && <NotFindDataByFilter />}
    </>
  );
};

export default LeaguesItems;
