import React, { Fragment } from 'react';

import clsx from 'clsx';

import {
  Paper
  // List, 
  // ListItem, 
  // ListItemText
} from '@material-ui/core';

import { connect } from 'react-redux';

const Footer = props => {
  const { footerFixed } = props;
  return (
    <Fragment>
      <Paper
        square
        className={clsx('app-footer text-black-50', {
          'app-footer--fixed': footerFixed
        })}>
        <div className="app-footer--inner">
          <div className="app-footer--first">
            <span>Don't Hate, Communicate!</span>
            {/* <List dense className="d-flex align-items-center">
              <ListItem
                className="rounded-sm text-nowrap"
                button
                component="a"
                href="https://themes.material-ui.com/themes/carolina-react-admin-dashboard-free"
                target="_blank"
                rel="noopener">
                <ListItemText primary="Download now" />
              </ListItem>
              <ListItem
                className="rounded-sm text-nowrap"
                button
                component="a"
                href="https://themes.material-ui.com/themes/carolina-react-admin-dashboard-pro"
                target="_blank"
                rel="noopener">
                <ListItemText primary="View PRO Version" />
              </ListItem>
            </List> */}
          </div>
          <div className="app-footer--second">
            <span>Know Your Force</span> ©
            2020 - crafted with nothing but <span className="text-danger px-1">❤</span> for our police by{' '}
            <a href="https://knowyourforce.com" title="KnowYourForce.com">
              KnowYourForce.com
            </a>
          </div>
        </div>
      </Paper>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  footerFixed: state.ThemeOptions.footerFixed
});
export default connect(mapStateToProps)(Footer);
