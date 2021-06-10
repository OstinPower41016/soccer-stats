import * as React from "react";

import SectionList from "../../components/SectionList";
import TeamsItems from "../../components/Teams/Teams.items";

interface ITeamsProps {
  Filter: React.FunctionComponent<any>;
}

const Teams: React.FunctionComponent<ITeamsProps> = (props) => {
  const { Filter } = props;

  return <SectionList Filter={Filter} Items={TeamsItems}></SectionList>;
};

export default Teams;
