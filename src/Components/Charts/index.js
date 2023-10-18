import React from "react";
import { Chart } from "react-google-charts";
import "./index.css";

export const data = [
  ["Months", "values"],
  ["Jan", 200],
  ["Feb", 700],
  ["Mar", 400],
  ["Apr", 600],
  ["May", 200],
  ["Jun", 800],
  ["Jul", 500],
  ["Aug", 400],
  ["Sep", 100],
  ["Oct", 600],
  ["Nov", 400],
  ["Dec", 200],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};

export const Barcharts = () => {
  return (
    <>
      <div className="">
        <Chart
          chartType="Bar"
          width="390px"
          height="250px"
          data={data}
          /*  options={options} */
        />
      </div>
    </>
  );
};

export const piedata = [
  ["Total Customers", "Old"],
  ["Old Customers", 35],
  ["new Customers", 65],
];

export const Pieoptions = {
  title: "Total New Customers",
};

export const PieChart = () => {
  return (
    <>
      <div>
        <Chart
          chartType="PieChart"
          data={piedata}
          options={Pieoptions}
          width={"390px"}
          height={"300px"}
        />
      </div>
    </>
  );
};
