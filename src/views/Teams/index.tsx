import * as React from "react";

import TeamsItems from "../../components/Teams/Teams.items";

interface ITeamsProps {}

const Teams: React.FunctionComponent<ITeamsProps> = (props) => {
  return (
    <div>
      <TeamsItems />
    </div>
  );
};

export default Teams;
