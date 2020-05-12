import React from 'react';
import PageHeader from 'component/pageHeader';
import { AppContext } from 'component/context';
import convertDateTime from 'utils/convert';
import Timeline from 'component/timeline';
import { createTimeLineData } from 'utils/statistics';

export default function DashboardPage() {
  const { data, responses, settings, uploadFile } = React.useContext(
    AppContext
  );
  const errors = createTimeLineData(
    data.errors,
    'amount',
    null,
    settings.numberOfSteps
  );

  const responsetimes = createTimeLineData(
    responses,
    'average',
    settings.responseTimeKey,
    settings.numberOfSteps
  );

  return (
    <>
      <PageHeader onUpload={uploadFile} />
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
          </div>
        </div>
        <div className="card">
          <h2 className="card__header">crumbs</h2>
          <div className="card__content">
            <span>{`You have ${data.actions.length} actions`}</span>
            {data.actions.length > 0 && (
              <span className="text-small">{`Last action: ${convertDateTime(
                data.actions[0].timestamp
              )}`}</span>
            )}
          </div>
        </div>
        <Timeline
          data={errors}
          title="Errors over time"
          keys={['amount']}
          type={settings.graphType}
          className="grid-col-1-3"
        />
        <Timeline
          data={responsetimes}
          keys={['average']}
          type={settings.graphType}
          title="Average response time (ms)"
          className="grid-col-1-3"
        />
      </div>
    </>
  );
}
