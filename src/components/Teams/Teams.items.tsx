import * as React from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import isEmpty from "lodash/isEmpty";

import { useAppSelector } from "../../hooks/redux";
import Loading from "../Loading";
import api from "../../api/soccer";
import Team from "./Team";

interface ITeamsItemsProps {}

interface IParamsTypes {
  leagueId: string;
  seasonYear: string;
}

export interface ITeams {
  country: string;
  club: string;
  website: string;
  id: string;
}

const TeamsItems: React.FunctionComponent<ITeamsItemsProps> = (props) => {
  const [teams, setTeams] = React.useState<ITeams[]>([]);
  const { leagueId, seasonYear } = useParams<IParamsTypes>();
  const searchText = useAppSelector((state) => state.search.searchText);
  const { search } = useLocation();

  React.useEffect(() => {
    const abortController = axios.CancelToken.source();
    const seasonByQuery = new URLSearchParams(search).get("season");
    const season = seasonByQuery ? seasonByQuery : seasonYear;

    api.getTeams(abortController.token, leagueId, season).then((data) => {
      if (data) {
        const response = data.teams.map((team: any) => {
          return {
            country: team.area.name,
            club: team.name,
            website: team.website,
            id: team.id,
          };
        });
        setTeams(response);
      }
    });

    return () => abortController.cancel();
  }, [search]);

  const regexp = new RegExp(`^${searchText}`, "gi");

  const TeamsRender = () => {
    return (
      <>
        {teams.map((team) => {
          if (searchText.trim() && !team.club.match(regexp)) {
            return null;
          } else if (!searchText || (searchText.trim() && team.club.match(regexp))) {
            return <Team {...team} key={team.id} />;
          }
        })}
      </>
    );
  };

  return (
    <>
      {isEmpty(teams) && <Loading />}
      {!isEmpty(teams) && <TeamsRender />}
    </>
  );
};

export default TeamsItems;
