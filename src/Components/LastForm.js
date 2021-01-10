import React from "react";
import Container from "@material-ui/core/Container";
import { Line } from "react-chartjs-2";

function LastForm(props) {
  const { fName } = props;
  const { lName } = props;
  const { money } = props;
  const { years } = props;

  const initial = money;
  const time = years;
  const A = [];
  const B = [];
  const C = [];

  var xaxis = [];

  for (var i = 0; i < time; i++) {
    xaxis.push(i);
  }

  const state = {
    labels: xaxis,
    datasets: [
      {
        label: "Savings",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#f55b3a",
        borderColor: "#f55b3a",
        borderWidth: 2,
        data: A,
      },
      {
        label: "ETFs",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#ffb013",
        borderColor: "#ffb013",
        borderWidth: 2,
        data: B,
      },
      {
        label: "Stocks",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#58b9ac",
        borderColor: "#58b9ac",
        borderWidth: 2,
        data: C,
      },
    ],
  };

  //Savings Account Compounding
  const Savings = (inital, time, r = 0.005) => {
    if (r > 0.03 || r < 0) alert("Interest rate is unrealistic.");
    else {
      for (var k = 0; k < time; k++) {
        A.push(inital * (1 + r) ** k);
      }
    }
  };

  //ETF Compounding
  const ETF = (inital, time) => {
    B.push(inital);
    for (var k = 0; k < time; k++) {
      const randRate = 0.07 + Math.random() * 0.1;
      B.push(B[k] * (1 + randRate));
    }
  };

  //Stock Compounding
  const stock = (initial, time) => {
    C.push(initial);
    for (var k = 0; k < time; k++) {
      const randRate = 0.1 + Math.random() * 0.25;
      C.push(C[k] * (1 + randRate));
    }
  };

  Savings(initial, time);
  ETF(initial, time);
  stock(initial, time);

  return (
    <Container>
      <h1>
        {fName} {lName}, here are your results!
      </h1>
      <div>
        <Line
          data={state}
          options={{
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "Investment ($)",
                    fontSize: 20,
                    fontColor: "black",
                  },
                  ticks: {
                    beginAtZero: true,
                    fontColor: "white",
                  },
                },
              ],
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "Number of Years",
                    fontSize: 20,
                    fontColor: "black",
                  },
                  ticks: {
                    beginAtZero: true,
                    fontColor: "white",
                  },
                },
              ],
            },
            title: {
              display: true,
              text: "Compounded Interest: Savings vs ETFS vs Stocks",
              fontSize: 20,
              fontColor: "black",
            },
            legend: {
              display: true,
              position: "right",
              labels: {
                fontColor: "black",
              },
            },
          }}
        />
      </div>
    </Container>
  );
}

export default LastForm;
