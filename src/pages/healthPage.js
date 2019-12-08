import React from 'react';
import { AppContext } from 'component/context';
import PageHeader from 'component/pageHeader';
import Timeline from 'component/timeline';
import { createTimeLineData } from 'utils/timeline';

export default function HealthPage() {
  const { data, uploadFile, settings } = React.useContext(AppContext);
  const responsetimes = createTimeLineData(
    data.crumbs.filter((c) => c.category === settings.responseKey),
    'average',
    settings.responseTimeKey
  );

  const navigationtimes = createTimeLineData(
    data.crumbs.filter((c) => c.category === settings.navigationKey),
    'amount'
  );

  return (
    <>
      <PageHeader label="health analysis" file="crumbs" onUpload={uploadFile} />
      <div className="dashboard">
        <Timeline
          data={navigationtimes}
          type="amount"
          title="Page visits over time"
          className="grid-col-1-3"
        />
        <div className="card">
          <h2 className="card__header">Top 5 pages</h2>
        </div>
        <div className="card">
          <h2 className="card__header">Top 5 requests</h2>
        </div>
        <Timeline
          data={responsetimes}
          type="average"
          title="Average response time (ms)"
          className="grid-col-1-3"
        />
        <div className="card">
          <h2 className="card__header">5 longest requests</h2>
        </div>
        <div className="card">
          <h2 className="card__header">5 Longest average requests</h2>
        </div>
      </div>
    </>
  );
}
