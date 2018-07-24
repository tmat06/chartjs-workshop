import React from "react";
import routes from "./routes";
import { Link } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/done">Done</Link>
        <Link to="/test">Test</Link>
        <Link to="/workshop">Workshop</Link>
        {routes}
      </div>
    );
  }
}
