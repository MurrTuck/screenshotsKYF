import React, { Fragment } from 'react';

import Chart from 'react-apexcharts';

export default function LivePreviewExample() {
  const optionsMixedChart = {
    chart: {
      id: 'basic-bar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
        endingShape: 'arrow'
      }
    },
    stroke: {
      width: [4, 0, 0]
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    },
    markers: {
      size: 6,
      strokeWidth: 3,
      fillOpacity: 0,
      strokeOpacity: 0,
      hover: {
        size: 8
      }
    },
    yaxis: {
      tickAmount: 5,
      min: 0,
      max: 100
    }
  };

  const seriesMixedChart = [
    {
      name: 'Call Volume',
      type: 'line',
      data: [30, 40, 25, 50, 49, 21, 70, 51]
    },
    {
      name: 'Response Rate',
      type: 'line',
      data: [23, 12, 54, 61, 32, 56, 81, 19]
    },
    {
      name: 'Success Rate',
      type: 'line',
      data: [62, 12, 45, 55, 76, 41, 23, 43]
    }
  ];

  return (
    <Fragment>
      <Chart
        options={optionsMixedChart}
        series={seriesMixedChart}
        type="line"
      />
    </Fragment>
  );
}
