import * as React from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";

import api from "../../api/soccer";

interface ITeamsItemsProps {}

interface IParamsTypes {
  leagueId: string;
  seasonYear: string;
}

const TeamsItems: React.FunctionComponent<ITeamsItemsProps> = (props) => {
  const [teams, setTeams] = React.useState([]);
  const { leagueId, seasonYear } = useParams<IParamsTypes>();
  const { search } = useLocation();

  React.useEffect(() => {
    const abortController = axios.CancelToken.source();
    const seasonByQuery = new URLSearchParams(search).get("season");
    const season = seasonByQuery ? seasonByQuery : seasonYear;

    api.getTeams(abortController.token, leagueId, season).then((data) => {
      console.log(data);
    });

    return () => abortController.cancel();
  }, [search]);

  return <div className="teams">Items</div>;
};

export default TeamsItems;
