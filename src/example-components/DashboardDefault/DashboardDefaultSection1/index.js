import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card, CardContent, Button, Divider } from '@material-ui/core';

import Chart from 'react-apexcharts';
export default function LivePreviewExample() {
  const chart30Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#3c44b1'],
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 4
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    },
    legend: {
      show: false
    }
  };
  const chart30Data = [
    {
      name: 'Crimes Reported',
      data: [47, 38, 56, 24, 45, 54, 38, 47, 38, 56, 24, 56, 24, 65]
    }
  ];

  const chart31Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#f4772e'],
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 3
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    },
    legend: {
      show: false
    }
  };
  const chart31Data = [
    {
      name: 'Crimes Reported',
      data: [38, 47, 38, 56, 24, 56, 24, 65, 47, 38, 56, 24, 45, 54]
    }
  ];

  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-box bg-premium-dark border-0 text-light mb-4">
            <CardContent className="p-3">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Annual Budget
                  </small>
                  <span className="font-size-xxl mt-1">$12,586,356</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-success d-50 rounded-circle d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={['far', 'chart-bar']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="text-success mr-1"
                />
                <span className="text-success pr-1">15.4%</span>
                <span className="text-white-50">increase from last year</span>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-box bg-midnight-bloom text-light mb-4">
            <CardContent className="p-3">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Personnel
                  </small>
                  <span className="font-size-xxl mt-1">$2,423,274</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-primary d-50 rounded-circle d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={['far', 'lightbulb']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="text-warning mr-1"
                />
                <span className="text-warning pr-1">7.4%</span>
                <span className="text-white-50">increase from last year</span>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="card-box bg-plum-plate text-light mb-4">
            <CardContent className="p-3">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Training
                  </small>
                  <span className="font-size-xxl mt-1">$1,528,345</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-primary d-50 rounded-circle d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={['far', 'clock']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-down']}
                  className="text-white mr-1"
                />
                <span className="text-white px-1">15.4%</span>
                <span className="text-white-50">down from the past 3 years</span>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <CardContent className="p-0">
              <Grid container spacing={4} className="mt-4">
                <Grid item xs={12} sm={4}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-xxl text-success"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">872,345</b>
                      <span className="text-black-50 d-block">population</span>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'keyboard']}
                        className="font-size-xxl text-danger"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">7,568</b>
                      <span className="text-black-50 d-block">donations</span>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'gem']}
                        className="font-size-xxl text-info"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">$22,778</b>
                      <span className="text-black-50 d-block">revenue</span>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <div className="divider mt-4" />
              <div className="text-center py-4">
                <Button size="small" color="primary">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['far', 'eye']} />
                  </span>
                  <span className="btn-wrapper--label">Generate reports</span>
                </Button>
              </div>
            </CardContent>
            <div className="card-footer bg-light text-center">
              <div className="pt-4 pr-4 pl-4">
                <Chart
                  options={chart30Options}
                  series={chart30Data}
                  type="line"
                  height={100}
                />
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-body pb-1">
              <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-xxl text-success"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">2,345,762</b>
                      <span className="text-black-50 d-block">population</span>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'keyboard']}
                        className="font-size-xxl text-danger"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">23,568</b>
                      <span className="text-black-50 d-block">donations</span>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'gem']}
                        className="font-size-xxl text-info"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">$109,693</b>
                      <span className="text-black-50 d-block">revenue</span>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <div className="pt-4 pr-4 pl-4">
                <Chart
                  options={chart31Options}
                  series={chart31Data}
                  type="line"
                  height={100}
                />
              </div>
            </div>
            <Divider />
            <div className="my-2 text-center">
              <FontAwesomeIcon
                icon={['fas', 'arrow-up']}
                className="text-danger"
              />
              <span className="text-danger px-1">15.4%</span>
              <span className="text-black-50">crimes reorted</span>
            </div>
            <div className="card-footer bg-light p-4 text-center">
              <Button color="primary" variant="contained">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['far', 'eye']} />
                </span>
                <span className="btn-wrapper--label">View Printable Report</span>
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
