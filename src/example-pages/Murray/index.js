import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';
import { Grid } from '@material-ui/core';

import { ExampleWrapperSimple } from '../../layout-components';

// import DashboardDefaultSection1 from '../../example-components/DashboardDefault/DashboardDefaultSection1';
// import DashboardDefaultSection2 from '../../example-components/DashboardDefault/DashboardDefaultSection2';
// import DashboardDefaultSection3 from '../../example-components/DashboardDefault/DashboardDefaultSection3';
// import DashboardDefaultSection4 from '../../example-components/DashboardDefault/DashboardDefaultSection4';
import DashboardDefaultSectionMurr1 from '../../example-components/Murray/DashboardDefaultSectionMurr1';
// import ApexChartsRadar from '../../example-components/ApexCharts/ApexChartsRadar';
import ApexChartsRadar2 from '../../example-components/ApexCharts/ApexChartsRadar';
import DashboardDefaultSectionMurr3 from '../../example-components/Murray/DashboardDefaultSectionMurr3'
import ApexChartsRadarMurr from "../../example-components/Murray/ApexChartsMurr"

export default function Murray() {
    return (
        <Fragment>
            <PageTitle
                titleHeading="Annual Budget"
                titleDescription="Annual Budget Data"
            />

            {/* <DashboardDefaultSection1 />
            <DashboardDefaultSection2 />
            <DashboardDefaultSection3 />
            <DashboardDefaultSection4 /> */}
            <DashboardDefaultSectionMurr1 />
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <ExampleWrapperSimple sectionHeading="Radar">
                        <ApexChartsRadarMurr />
                    </ExampleWrapperSimple>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ExampleWrapperSimple sectionHeading="Radar">
                        <ApexChartsRadar2 />
                    </ExampleWrapperSimple>
                </Grid>
            </Grid>
            <DashboardDefaultSectionMurr3 />
        </Fragment>
    );
} 