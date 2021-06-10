import * as React from "react";
import cn from "classnames";
import { Link, useHistory } from "react-router-dom";

import { getQuery } from "../../utils/query";
import { TLeague } from "../../store/Leagues/leaguesSlice";
import "./styles/League.scss";

interface ILeagueProps extends TLeague {
  className?: string;
}

const League: React.FunctionComponent<ILeagueProps> = (props) => {
  const history = useHistory();
  const season = getQuery(history, "season") || new Date().getFullYear();

  const pathRoute = `teams/${props.id}/${season}`;

  return (
    <Link to={pathRoute} className={cn("league", { [props.className!]: props.className })}>
      <span className="league__country">{props.country}</span>
      <span className="league__league">{props.league}</span>
      <a href="#" className="league__link-teams">
        View Teams
      </a>
    </Link>
  );
};

export default League;
