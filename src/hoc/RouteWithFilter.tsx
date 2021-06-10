import { FC } from "react";
import { Route, RouteProps } from "react-router-dom";

import Filters from "../components/Filters";

interface IRouterWithFilter extends RouteProps {
  component: FC<any>;
}

const RouterWithFilter: FC<IRouterWithFilter> = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} Filter={Filters} />} />;
};

export default RouterWithFilter;
