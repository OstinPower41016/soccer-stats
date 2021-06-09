import * as React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import LeagueCalendar from "./views/League-calendar";
import Leagues from "./views/Leagues";
import SingleTeamCalendar from "./views/Single-team-calendar";
import Teams from "./views/Teams";

interface IMainRouterProps {}

const MainRouter: React.FunctionComponent<IMainRouterProps> = (props) => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Leagues} />
        <Route path="/teams" component={Teams} />
        <Route path="/teams/:league" component={LeagueCalendar} />
        <Route path="/teams:/leagueCalendar" component={SingleTeamCalendar} />
      </Switch>
    </>
  );
};

export default MainRouter;
