import React, { Fragment } from 'react';

import Chart from 'react-apexcharts';

export default function LivePreviewExample() {
  const options = {
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    }
  };
  const series = [
    {
      data: [30, 40, 25, 50, 49, 21, 70, 51, 44, 57, 87, 27]
    }
  ];

  return (
    <Fragment>
      <Chart options={options} series={series} type="bar" />
    </Fragment>
  );
}
