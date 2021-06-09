import * as React from "react";

import "./index.scss";
import Filters from "../../components/Filters";
import Container from "../../components/layouts/Container/container";
import LeaguesItems from "../../components/Leagues/Leagues.items";

interface ILeaguesProps {}

const Leagues: React.FunctionComponent<ILeaguesProps> = (props) => {
  return (
    <section className="leagues">
      <Container className="leagues__wrapper">
        <Filters className="leagues__filter" />
        <div className="leagues__items">
          <LeaguesItems />
        </div>
      </Container>
    </section>
  );
};

export default Leagues;
