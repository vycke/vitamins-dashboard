import React from 'react';
import { AppContext } from 'component/context';
import PageHeader from 'component/pageHeader';
import Timeline from 'component/timeline';
import { createTimeLineData } from 'utils/timeline';

export default function HealthPage() {
  const { data, uploadFile } = React.useContext(AppContext);
  const responsetimes = createTimeLineData(
    data.crumbs.filter((c) => c.category === 'response'),
    'average',
    'time'
  );

  return (
    <>
      <PageHeader label="health analysis" file="crumbs" onUpload={uploadFile} />
      <div className="dashboard">
        <Timeline
          data={responsetimes}
          type="average"
          title="Average response time (ms)"
          className="grid-col-1-3"
        />
      </div>
    </>
  );
}
