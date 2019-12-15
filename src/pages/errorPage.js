import React from 'react';
import PageHeader from 'component/pageHeader';
import SearchBar from 'component/searchBar';
import { AppContext } from 'component/context';
import ErrorRow from 'component/errorRow';
import Timeline from 'component/timeline';
import { searchErrors } from 'utils/search';
import { createTimeLineData } from 'utils/statistics';

export default function ErrorPage() {
  const { uploadFile, data, settings } = React.useContext(AppContext);
  const [search, setSearch] = React.useState('');
  const [show, setShow] = React.useState(25);
  const handleShow = () => setShow(show + 25);

  const errors = searchErrors(data.errors, search) || [];
  const timeline = createTimeLineData(
    errors,
    'amount',
    null,
    settings.numberOfSteps
  );

  return (
    <>
      <PageHeader label="errors" file="errors" onUpload={uploadFile} />
      <SearchBar value={search} onChange={setSearch} />
      {errors.length > 1 && (
        <Timeline
          data={timeline}
          keys={['amount']}
          className="gap-bottom"
          type={settings.graphType}
        />
      )}
      {errors.map((l, i) => (
        <ErrorRow key={i} log={l} />
      ))}
      {data.errors.length > show && (
        <button className="more" onClick={handleShow}>
          More...
        </button>
      )}
    </>
  );
}
