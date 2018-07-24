import React from "react";
import { Scatter } from "react-chartjs-2";

export default class Workshop extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        datasets: [
          {
            label: "Test Scatter Boi",
            data: [
              {
                x: -0.5,
                y: 0
              },
              {
                x: 0,
                y: 0.8
              },
              {
                x: 0.4,
                y: 0.5
              }
            ]
          }
        ]
      }
    };
  }
  render() {
    return (
      <div>
        <Scatter data={this.state.data} />
      </div>
    );
  }
}
