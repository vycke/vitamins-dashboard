import React from 'react';
import ActionRow from '../component/actionRow';
import ErrorRow from '../component/errorRow';
import { AppContext } from 'component/context';
import PageHeader from 'component/pageHeader';

export default function LogsPage({ className = '' }) {
  const [tab, setTab] = React.useState('errors');
  const { data, uploadFile } = React.useContext(AppContext);

  console.log(data);

  return (
    <>
      <PageHeader label="logs" onUpload={uploadFile} />
      <div className="header">
        <div className="switcher">
          <button
            onClick={() => setTab('errors')}
            className={tab === 'errors' ? 'selected' : ''}>
            errors
          </button>
          <button
            onClick={() => setTab('actions')}
            className={tab === 'actions' ? 'selected' : ''}>
            actions
          </button>
        </div>
      </div>
      <ul className="list">
        {data[tab] &&
          data[tab].map((l, i) =>
            tab === 'actions' ? (
              <ActionRow key={i} item={l} />
            ) : (
              <ErrorRow key={i} item={l} />
            )
          )}
      </ul>
    </>
  );
}
