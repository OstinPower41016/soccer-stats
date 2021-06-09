import * as React from "react";
import cn from "classnames";

import { TLeague } from "../../store/Leagues/leaguesSlice";
import "./styles/League.scss";

interface ILeagueProps extends TLeague {
  className?: string;
}

const League: React.FunctionComponent<ILeagueProps> = (props) => {
  return (
    <div className={cn("league", { [props.className!]: props.className })}>
      <span className="league__country">{props.country}</span>
      <span className="league__league">{props.league}</span>
      <a href="#" className="league__link-teams">
        View Teams
      </a>
    </div>
  );
};

export default League;
