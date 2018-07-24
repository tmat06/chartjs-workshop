import React from "react";
import { Bar, Line, Doughnut, Polar, Radar } from "react-chartjs-2";

export default class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      line: {
        labels: ["pink", "stuff", "dog", "yep", "sure"],
        datasets: [
          {
            // label: "stuff?",
            data: [15, 45, 23, 65, 2],
            backgroundColor: "blue"
          }
        ]
      },
      doughnut: {
        labels: ["dog", "cat", "mouse"],
        datasets: [
          {
            data: [75, 50, 32],
            backgroundColor: ["blue", "red", "green"]
          }
        ],
        options: {
          maintainAspectRatio: true
        }
      },
      data: {
        datasets: [
          {
            label: "Stuff",
            data: [75, 45, 23],
            backgroundColor: "pink"
          },
          {
            label: "Other Stuff",
            data: [15],
            backgroundColor: "blue"
          },
          {
            label: "More Stuff",
            data: [99],
            backgroundColor: "yellow"
          }
        ],
        options: {
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  max: 100,
                  min: 0,
                  stepSize: 5
                }
              }
            ]
          }
        }
      }
    };
  }
  render() {
    return (
      <div>
        <div>
          <Bar
            data={this.state.data}
            options={this.state.data.options}
            height={500}
            width={250}
          />
        </div>
        <br />
        <div>
          <Line
            data={this.state.line}

            //   options={this.state.data.options}

            // redraw={true}
            // options={{
            //   maintainAspectRatio: false,
            //   pointHoverBackgroundColor: ["green"]
            // }}
          />
          <Doughnut
            data={this.state.doughnut}
            // height={25}
            // width={25}
            options={this.state.doughnut.options}
          />
          <Polar
            data={{
              datasets: [
                {
                  data: [25, 50, 33],
                  backgroundColor: ["red", "blue", "yellow"]
                }
              ],
              labels: ["blue", "red", "grey"]
            }}
          />
          <Radar
            data={{
              labels: ["blue", "red", "yellow"],
              datasets: [
                {
                  data: [50, 25, 33]
                },
                {
                  data: [45, 85, 73]
                },
                {
                  data: [80, 46, 73]
                }
              ]
            }}
          />
        </div>
      </div>
    );
  }
}
