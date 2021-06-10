import * as React from "react";

import "./styles/SectionList.scss";
import Container from "./layouts/Container/container";
import { IFiltersProps } from "./Filters";

interface ISectionListProps {
  Filter: React.FunctionComponent<IFiltersProps>;
  Items: React.FunctionComponent;
}

const SectionList: React.FunctionComponent<ISectionListProps> = (props) => {
  const { Filter, Items } = props;

  return (
    <section className="section-list">
      <Container className="section-list__wrapper">
        <Filter className="section-list__filter" />
        <div className="section-list__items">
          <Items />
        </div>
        {props.children}
      </Container>
    </section>
  );
};

export default SectionList;
