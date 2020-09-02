import React from 'react';
import PropTypes from 'prop-types';

import { AppBar, Box, Typography, Tabs, Tab } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function LivePreviewExample() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example">
          <Tab label="Police Department" />
          <Tab label="Fire Department" />
          <Tab label="EMS Crew" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Police Department
      </TabPanel>
      <TabPanel value={value} index={1}>
        Fire Department
      </TabPanel>
      <TabPanel value={value} index={2}>
        EMS Crew
      </TabPanel>
    </div>
  );
}
