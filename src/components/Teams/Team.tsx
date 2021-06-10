import * as React from "react";

import { ITeams } from "./Teams.items";
import "./styles/Team.scss";

interface ITeamProps extends ITeams {}

const Team: React.FunctionComponent<ITeamProps> = (props) => {
  return (
    <div className="team">
      <span className="team__country">{props.country}</span>
      <span className="team__club">{props.club}</span>
      <a href={props.website} className="team__link-team">
        {props.website}
      </a>
    </div>
  );
};

export default Team;
