import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card, CardContent, } from '@material-ui/core';

export default function LivePreviewExample() {


    return (
        <Fragment>
            <Grid container spacing={4} >
                <Grid item xs={12}>
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

            </Grid>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
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
                <Grid item xs={12} sm={6}>
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
        </Fragment>
    );
}
