import * as React from "react";

import "./index.scss";
import Container from "../../components/layouts/Container/container";
import LeaguesItems from "../../components/Leagues/Leagues.items";

interface ILeaguesProps {
  Filter: any;
}

const Leagues: React.FunctionComponent<ILeaguesProps> = (props) => {
  const { Filter } = props;

  return (
    <section className="leagues">
      <Container className="leagues__wrapper">
        <Filter className="leagues__filter" />
        <div className="leagues__items">
          <LeaguesItems />
        </div>
      </Container>
    </section>
  );
};

export default Leagues;
