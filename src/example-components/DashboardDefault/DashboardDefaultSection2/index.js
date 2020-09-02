import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  IconButton,
  LinearProgress,
  Card,
  CardContent,
  Button,
  Tooltip
} from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box mb-4">
        <div className="card-header pr-2">
          <div className="card-header--title">Police Officer Status</div>
          <div className="card-header--actions">
            <Tooltip arrow title="Refresh">
              <IconButton size="small" color="primary" className="mr-3">
                <FontAwesomeIcon icon={['fas', 'cog']} spin />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <CardContent className="p-3">
          <div className="table-responsive">
            <table className="table table-borderless table-hover text-nowrap mb-0">
              <thead>
                <tr>
                  <th>Badge #</th>
                  <th className="text-left">Name</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Training Progress</th>
                  <th className="text-center">Actions Due</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3412</td>
                  <td>
                    <div>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        Jordan Spencer
                      </a>
                      <span className="text-black-50 d-block">
                        Sheriff
                      </span>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="px-4 badge badge-success">completed</div>
                  </td>
                  <td>
                    <LinearProgress variant="determinate" value={100} color="primary" />
                  </td>
                  <td className="text-center">
                    <Tooltip arrow title="View Details">
                      <IconButton
                        size="small"
                        variant="outlined"
                        color="primary">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
                <tr>
                  <td>4491</td>
                  <td>
                    <div>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        Brady Schmidt
                      </a>
                      <span className="text-black-50 d-block">
                        SWAT Sniper
                      </span>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="badge badge-warning px-4">Pending</div>
                  </td>
                  <td>
                    <LinearProgress variant="determinate" value={85} color="primary" />
                  </td>
                  <td className="text-center">
                    <Tooltip arrow title="View Details">
                      <IconButton
                        size="small"
                        variant="outlined"
                        color="primary">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
                <tr>
                  <td>4427</td>
                  <td>
                    <div>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        Murray Tucker
                      </a>
                      <span className="text-black-50 d-block">
                        Flexin' Mall Cop
                      </span>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="badge badge-danger px-4">Failed</div>
                  </td>
                  <td>
                    <LinearProgress variant="determinate" value={44} color="primary" />
                  </td>
                  <td className="text-center">
                    <Tooltip arrow title="View Details">
                      <IconButton
                        size="small"
                        variant="outlined"
                        color="primary">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
                <tr>
                  <td>3323</td>
                  <td>
                    <div>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        Garrett Nordstrom
                      </a>
                      <span className="text-black-50 d-block">
                        Tank Driver
                      </span>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="px-4 badge badge-success">Completed</div>
                  </td>
                  <td>
                    <LinearProgress variant="determinate" value={100} color="primary" />
                  </td>
                  <td className="text-center">
                    <Tooltip arrow title="View Details">
                      <IconButton
                        size="small"
                        variant="outlined"
                        color="primary">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
        <div className="card-footer d-flex justify-content-between">
          <Button color="primary" size="small">
            Delete
          </Button>
          <div>
            <Button
              size="small"
              variant="contained"
              className="mr-3"
              color="primary">
              View all
            </Button>
            <Button size="small" variant="contained" color="secondary">
              Add new entry
            </Button>
          </div>
        </div>
      </Card>
    </Fragment>
  );
}
