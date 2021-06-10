import * as React from "react";
import axios from "axios";

import api from "../../api/soccer";

interface ITeamsItemsProps {}

const TeamsItems: React.FunctionComponent<ITeamsItemsProps> = (props) => {
  const [teams, setTeams] = React.useState([]);

  React.useEffect(() => {
    const abortController = axios.CancelToken.source();

    api.getTeams(abortController.token).then((data) => {
      setTeams(data.teams);
    });

    return () => abortController.cancel();
  }, []);

  console.log(teams);

  return <div></div>;
};

export default TeamsItems;
