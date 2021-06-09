import * as React from "react";
import { Link } from "react-router-dom";
import { GiSoccerBall } from "react-icons/gi";

import "./styles/Header.scss";
import Container from "./layouts/Container/container";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <section className="header">
      <Container>
        <nav className="header__navigation">
          <Link to="/" className="header__navigation-logo">
            <GiSoccerBall />
            <p className="header__title">Football Statistics Online</p>
          </Link>
          <div className="header__links-group">
            <Link to="/leagues">Leagues</Link>
            <Link to="/teams">Teams</Link>
          </div>
        </nav>
      </Container>
    </section>
  );
};

export default Header;
