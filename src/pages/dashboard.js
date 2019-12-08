import React from 'react';
import PageHeader from 'component/pageHeader';
import { AppContext } from 'component/context';
import convertDateTime from 'utils/convertDateTime';
import { Link } from '@reach/router';
import Timeline from 'component/timeline';
import { createTimeLineData } from 'utils/timeline';

export default function DashboardPage() {
  const { data, uploadFile } = React.useContext(AppContext);
  const errors = createTimeLineData(data.errors, 'amount');

  return (
    <>
      <PageHeader />
      <div className="dashboard">
        <div className="card">
          <h2 className="card__header">errors</h2>
          <div className="card__content">
            <span>{`You have ${data.errors.length} errors`}</span>
            {data.errors.length > 0 && (
              <span className="text-small">{`Last error: ${convertDateTime(
                data.errors[0].timestamp
              )}`}</span>
            )}
            <div className="columns">
              <Link to="/errors">View errors</Link>
              <input
                id="uploadError"
                type="file"
                multiple
                className="visually-hidden"
                onChange={(e) => uploadFile(e.target.files, 'errors')}
              />
              <label htmlFor="uploadError">{`Upload log(s)`}</label>
            </div>
          </div>
        </div>
        <div className="card">
          <h2 className="card__header">crumbs</h2>
          <div className="card__content">
            <span>{`You have ${data.crumbs.length} crumbs`}</span>
            {data.crumbs.length > 0 && (
              <span className="text-small">{`Last crumb: ${convertDateTime(
                data.crumbs[0].timestamp
              )}`}</span>
            )}
            <div className="columns">
              <Link to="/crumbs">View crumbs</Link>
              <div>
                <input
                  id="uploadCrumb"
                  type="file"
                  multiple
                  className="visually-hidden"
                  onChange={(e) => uploadFile(e.target.files, 'crumbs')}
                />
                <label htmlFor="uploadCrumb">{`Upload log(s)`}</label>
              </div>
            </div>
          </div>
        </div>
        <Timeline
          data={errors}
          title="Errors over time"
          type="amount"
          className="grid-col-1-3"
        />
      </div>
    </>
  );
}
