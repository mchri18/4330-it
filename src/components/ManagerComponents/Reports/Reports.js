import React from 'react';
import "./Reports.css";
var BarChart = require("react-chartjs").Bar;


const chartData1 = {
    labels: ["Average waiting time before job is started (minutes)"],
    datasets: [
        {
            label: "Last Month's Average",
            fillColor: "rgba(225, 69, 69, 0.5)",
            strokeColor: "rgba(225, 69, 69, 0.8)",
            highlightFill: "rgba(225, 69, 69, 0.75)",
            highlightStroke: "rgba(225, 69, 69, 1)",
            data: [98]
        },
        {
            label: "This Day's Average",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [121]
        }
    ]
};

const chartData2 = {
    labels: ["Average queue length"],
    datasets: [
        {
            label: "Last Month's Average",
            fillColor: "rgba(225, 69, 69, 0.5)",
            strokeColor: "rgba(225, 69, 69, 0.8)",
            highlightFill: "rgba(225, 69, 69, 0.75)",
            highlightStroke: "rgba(225, 69, 69, 1)",
            data: [11]
        },
        {
            label: "This Day's Average",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [2]
        }
    ]
};

const chartData3 = {
    labels: ["Percentage of time the queue is empty"],
    datasets: [
        {
            label: "Last Month's Average",
            fillColor: "rgba(225, 69, 69, 0.5)",
            strokeColor: "rgba(225, 69, 69, 0.8)",
            highlightFill: "rgba(225, 69, 69, 0.75)",
            highlightStroke: "rgba(225, 69, 69, 1)",
            data: [10]
        },
        {
            label: "This Day's Average",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [95]
        }
    ]
};

const chartData4 = {
    labels: ["Number of the jobs addressed on the day they were requested"],
    datasets: [
        {
            label: "Last Month's Average",
            fillColor: "rgba(225, 69, 69, 0.5)",
            strokeColor: "rgba(225, 69, 69, 0.8)",
            highlightFill: "rgba(225, 69, 69, 0.75)",
            highlightStroke: "rgba(225, 69, 69, 1)",
            data: [7]
        },
        {
            label: "This Day's Average",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [1]
        }
    ]
};

const chartData5 = {
    labels: ["The number of hours out of an 8-hour day each technician is idle"],
    datasets: [
        {
            label: "Last Month's Average",
            fillColor: "rgba(225, 69, 69, 0.5)",
            strokeColor: "rgba(225, 69, 69, 0.8)",
            highlightFill: "rgba(225, 69, 69, 0.75)",
            highlightStroke: "rgba(225, 69, 69, 1)",
            data: [3]
        },
        {
            label: "This Day's Average",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [2]
        }
    ]
};

const chartData6 = {
    labels: ["Average technician hours per job"],
    datasets: [
        {
            label: "Last Month's Average",
            fillColor: "rgba(225, 69, 69, 0.5)",
            strokeColor: "rgba(225, 69, 69, 0.8)",
            highlightFill: "rgba(225, 69, 69, 0.75)",
            highlightStroke: "rgba(225, 69, 69, 1)",
            data: [7.75]
        },
        {
            label: "This Day's Average",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [1]
        }
    ]
};

const chartData7 = {
    labels: ["Average customer bill"],
    datasets: [
        {
            label: "Last Month's Average",
            fillColor: "rgba(225, 69, 69, 0.5)",
            strokeColor: "rgba(225, 69, 69, 0.8)",
            highlightFill: "rgba(225, 69, 69, 0.75)",
            highlightStroke: "rgba(225, 69, 69, 1)",
            data: [152]
        },
        {
            label: "This Day's Average",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [60]
        }
    ]
};

const chartData8 = {
    labels: ["Tim A", "Bob T.B.", "Ryan H.", "Rick S."],
    datasets: [
        {
            label: "Last Month Total Hours Worked",
            fillColor: "rgba(225, 69, 69, 0.5)",
            strokeColor: "rgba(225, 69, 69, 0.8)",
            highlightFill: "rgba(225, 69, 69, 0.75)",
            highlightStroke: "rgba(225, 69, 69, 1)",
            data: [166, 155, 159, 100]
        },
        {
            label: "This Day Total Hours Worked",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [1, 5, 3, 8]
        }
    ]
};

const chartData9 = {
    labels: ["Revenue in Dollars"],
    datasets: [
        {
            label: "Last Month",
            fillColor: "rgba(225, 69, 69, 0.5)",
            strokeColor: "rgba(225, 69, 69, 0.8)",
            highlightFill: "rgba(225, 69, 69, 0.75)",
            highlightStroke: "rgba(225, 69, 69, 1)",
            data: [2498]
        },
        {
            label: "This Day",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [60]
        }
    ]
};

const chartOptions = {
        responsive: true,

        //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero : true,

        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines : true,

        //String - Colour of the grid lines
        scaleGridLineColor : "rgba(0,0,0,.05)",

        //Number - Width of the grid lines
        scaleGridLineWidth : 1,

        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,

        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,

        //Boolean - If there is a stroke on each bar
        barShowStroke : true,

        //Number - Pixel width of the bar stroke
        barStrokeWidth : 2,

        //Number - Spacing between each of the X value sets
        barValueSpacing : 5,

        //Number - Spacing between data sets within X values
        barDatasetSpacing : 1,


};

const Reports = () =>(
  <div id="Reports">
      <div id = "header">
      <h1> Reports </h1>
      </div>

      <div id="MonthlyReports">
          <h2>Monthly Reports/Daily Reports</h2>
      </div>
      <div id="BarChart">
          <BarChart
          data={chartData1} options={chartOptions}
      />
      </div>

      <div id="BarChart">
          <BarChart
              data={chartData2} options={chartOptions}
          />
      </div>

      <div id="BarChart">
          <BarChart
              data={chartData3} options={chartOptions}
          />
      </div>

      <div id="BarChart">
          <BarChart
              data={chartData4} options={chartOptions}
          />
      </div>

      <div id="BarChart">
          <BarChart
              data={chartData5} options={chartOptions}
          />
      </div>

      <div id="BarChart">
          <BarChart
              data={chartData6} options={chartOptions}
          />
      </div>

      <div id="BarChart">
          <BarChart
              data={chartData7} options={chartOptions}
          />
      </div>

      <div id="BarChart">
          <BarChart
              data={chartData8} options={chartOptions}
          />
      </div>

      <div id="BarChart">
          <BarChart
              data={chartData9} options={chartOptions}
          />
      </div>
  </div>
);

export default Reports;
