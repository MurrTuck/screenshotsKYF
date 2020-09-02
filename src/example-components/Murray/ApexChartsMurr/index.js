import React, { Fragment } from 'react';

import Chart from 'react-apexcharts';

export default function LivePreviewExample() {
    const options = {
        labels: ['Officer', 'Lieutenant', 'Detective', 'Admin', 'Crisis']
    };
    const series = [44, 55, 24, 17, 15];

    return (
        <Fragment>
            <div className="d-flex justify-content-center">
                <Chart options={options} series={series} type="pie" width="380" />
            </div>
        </Fragment>
    );
}
