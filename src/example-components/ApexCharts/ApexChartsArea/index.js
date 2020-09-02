import React, { Fragment } from 'react';

import Chart from 'react-apexcharts';

export default function LivePreviewExample() {
  const options = {
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  };
  const series = [
    {
      name: 'Call Volume',
      data: [30, 40, 25, 50, 49, 21, 70, 51]
    },
    {
      name: 'Call Response',
      data: [23, 12, 54, 61, 32, 56, 81, 19]
    }
  ];

  return (
    <Fragment>
      <Chart options={options} series={series} type="area" />
    </Fragment>
  );
}
