import React from 'react';
import logo from './react.svg';
import {VegaLite} from "react-vega";
import {a} from "./aaa";

import './Home.css';

class Home extends React.Component<{}, {}> {
  public render() {
    a();

    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Razzle</h2>
        </div>

        <VegaLite spec={{
          description: "A simple bar chart with embedded data.",
          // width: "container",
          // height: 400,
          mark: "bar",
          encoding: {
            x: { field: "a", type: "ordinal" },
            y: { field: "b", type: "quantitative" }
          }
        }} data={{ values: [
          { a: "A", b: 20 },
          { a: "B", b: 34 },
          { a: "C", b: 55 },
          { a: "D", b: 19 },
          { a: "E", b: 40 },
          { a: "F", b: 34 },
          { a: "G", b: 91 },
          { a: "H", b: 78 },
          { a: "I", b: 25 }
        ] }} />
      </div>
    );
  }
}

export default Home;
