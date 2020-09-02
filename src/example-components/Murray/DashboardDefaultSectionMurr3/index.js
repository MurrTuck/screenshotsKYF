import React, { Fragment } from 'react';



import {
    Grid,
    IconButton,
    LinearProgress,
    Card,
    CardContent,
    Button,
    List,
    ListItem,
    Tooltip,
    Divider
} from '@material-ui/core';

import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';



export default function LivePreviewExample() {

    return (
        <Fragment>
            <Grid container spacing={4}>
                <Grid item xs={12} lg={7}>
                    <Card className="card-box mb-4">
                        <div className="card-header">
                            <div className="font-size-lg d-block text-truncate">
                                <span className="text-black-50 pr-2">#32</span> Police vs. Firefighters Charity
                Competition
              </div>
                            <div className="ml-auto d-flex align-items-center align-content-center">
                                <Tooltip arrow title="View all participants">
                                    <IconButton color="primary" className="ml-3">
                                        <AddCircleTwoToneIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>
                        <CardContent className="p-3">
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={4}>
                                    <div className="text-center">
                                        <span className="text-black-50 d-block">PD Raised</span>
                                        <b className="font-size-xxl">$3,345</b>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <div className="text-center">
                                        <span className="text-black-50 d-block">FD Raised</span>
                                        <b className="font-size-xxl text-success">$4,771</b>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={4} className="align-box-row">
                                    <div className="w-100 mt-3 mt-md-0">
                                        <div className="mb-1">
                                            <span className="text-black-50 pr-1">Progress:</span>
                                            <span className="text-danger">-12 Points</span>
                                        </div>
                                        <LinearProgress variant="determinate" value={33} />
                                    </div>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Card className="card-box mb-4">
                        <div className="card-header">
                            <div className="font-size-lg d-block text-truncate">
                                <span className="text-black-50 pr-2">#33</span> Police Press Conference
              </div>
                            <div className="ml-auto d-flex align-items-center align-content-center">
                                <Tooltip arrow title="View all participants">
                                    <IconButton color="primary" className="ml-3">
                                        <AddCircleTwoToneIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>
                        <CardContent className="p-3">
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={4}>
                                    <div className="text-center">
                                        <span className="text-black-50 d-block">Views</span>
                                        <b className="font-size-xxl">21,345</b>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <div className="text-center">
                                        <span className="text-black-50 d-block">Likes</span>
                                        <b className="font-size-xxl">10,128</b>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={4} className="align-box-row">
                                    <div className="w-100 mt-3 mt-md-0">
                                        <div className="mb-1">
                                            <span className="text-black-50 pr-1">Progress:</span>
                                            <span className="text-success">+44</span>
                                        </div>
                                        <LinearProgress variant="determinate" value={67} />
                                    </div>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <List>
                            <ListItem className="d-block p-0">
                                <Divider />
                                <div className="card-header rounded-0 bg-light">
                                    <div className="font-size-lg d-block text-truncate">
                                        <span className="text-black-50 pr-2">#34</span> Criminals Thrown into the Slammer
                  </div>
                                    <div className="ml-auto d-flex align-items-center align-content-center">
                                        <Tooltip arrow title="View all participants">
                                            <Button
                                                color="primary"
                                                className="font-size-lg ml-3 d-40 p-0 rounded-circle border-0">
                                                <AddCircleTwoToneIcon />
                                            </Button>
                                        </Tooltip>
                                    </div>
                                </div>
                                <CardContent className="p-3">
                                    <Grid container spacing={4}>
                                        <Grid item xs={12} md={4}>
                                            <div className="text-center">
                                                <span className="text-black-50 d-block">Crimes Reported</span>
                                                <b className="font-size-xxl">201</b>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <div className="text-center">
                                                <span className="text-black-50 d-block">Got'em</span>
                                                <b className="font-size-xxl">153</b>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={4} className="align-box-row">
                                            <div className="w-100 mt-3 mt-md-0">
                                                <div className="mb-1">
                                                    <span className="text-black-50 pr-1">Progress:</span>
                                                    <span className="text-info">+12</span>
                                                </div>
                                                <LinearProgress variant="determinate" value={79} />
                                            </div>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </ListItem>
                        </List>
                    </Card>
                </Grid>

            </Grid>
        </Fragment>
    );
}
