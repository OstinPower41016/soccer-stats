import * as React from "react";

import "./index.scss";
import LeaguesItems from "../../components/Leagues/Leagues.items";
import SectionList from "../../components/SectionList";

interface ILeaguesProps {
  Filter: any;
}

const Leagues: React.FunctionComponent<ILeaguesProps> = (props) => {
  const { Filter } = props;

  return <SectionList Filter={Filter} Items={LeaguesItems}></SectionList>;
};

export default Leagues;
