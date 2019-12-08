import React from 'react';
import { AppContext } from 'component/context';
import PageHeader from 'component/pageHeader';
import Timeline from 'component/timeline';
import { createTimeLineData, counter, highest } from 'utils/statistics';
import TopList from 'component/toplist';
import round from 'utils/round';

export default function HealthPage() {
  const {
    navigations,
    responses,
    requests,
    uploadFile,
    settings
  } = React.useContext(AppContext);

  const responsetimes = createTimeLineData(
    responses,
    'average',
    settings.responseTimeKey
  );
  const navigationtimes = createTimeLineData(navigations, 'amount');
  const topPages = counter(navigations);
  const topRequests = counter(requests, settings.requestNameKey);
  const topTimes = highest(
    responses,
    settings.responseTimeKey,
    settings.requestNameKey
  );
  const topRequestsAvg = counter(
    responses,
    settings.requestNameKey,
    settings.responseTimeKey
  )
    .map((t) => ({
      name: t.name,
      count: t.count,
      value: t.values / t.count
    }))
    .sort((a, b) => b.value - a.value)
    .map((t) => ({
      name: t.name,
      count: `${round(t.value)}ms (${t.count})`
    }));

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
        <TopList title="Top 5 pages" data={topPages.slice(0, 5)} />
        <TopList title="Top 5 requests" data={topRequests.slice(0, 5)} />

        <Timeline
          data={responsetimes}
          type="average"
          title="Average response time (ms)"
          className="grid-col-1-3"
        />
        <TopList title="Top 5 longest requests" data={topTimes} />
        <TopList title="Top 5 longest requests (avg)" data={topRequestsAvg} />
      </div>
    </>
  );
}
