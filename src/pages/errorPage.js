import React from 'react';
import PageHeader from 'component/pageHeader';
import SearchBar from 'component/searchBar';
import { AppContext } from 'component/context';
import ErrorRow from 'component/errorRow';
import Timeline from 'component/timeline';
import { differenceInSeconds } from 'date-fns';
import convertDateTime from 'utils/convertDateTime';

function filter(list, terms) {
  const termList = terms.split(' ').map((t) => t.toUpperCase());

  return list.filter((l) =>
    termList.some(
      (t) =>
        l.error.message.toUpperCase().includes(t) ||
        l.error.name.toUpperCase().includes(t) ||
        l.tags.some((tag) => tag.toUpperCase().includes(t))
    )
  );
}

function groupData(data) {
  const start = new Date(data[data.length - 1].timestamp);
  const end = new Date(data[0].timestamp);
  const interval = Math.round(differenceInSeconds(end, start) / 49);
  const groups = [];

  for (let i = 0; i < 50; i++) {
    const boxStart = start.toISOString();
    const boxEnd = new Date(
      start.setSeconds(start.getSeconds() + interval)
    ).toISOString();
    const boxName = convertDateTime(boxStart);

    groups.push({
      box: boxName,
      amount: data.filter(
        (d) => d.timestamp <= boxEnd && d.timestamp >= boxStart
      ).length
    });
  }

  return groups;
}

export default function ErrorPage() {
  const { uploadFile, data } = React.useContext(AppContext);
  const [search, setSearch] = React.useState('');
  const [show, setShow] = React.useState(25);
  const handleShow = () => setShow(show + 25);

  const errors = filter(data.errors, search);

  return (
    <>
      <PageHeader label="errors" file="errors" onUpload={uploadFile} />
      <SearchBar value={search} onChange={setSearch} />
      {errors.length > 1 && (
        <Timeline data={groupData(errors)} xKey="box" yKey="amount" />
      )}
      {errors.map((l, i) => (
        <ErrorRow key={i} log={l} />
      ))}
      {data.crumbs.length > show && (
        <button className="more" onClick={handleShow}>
          More...
        </button>
      )}
    </>
  );
}
