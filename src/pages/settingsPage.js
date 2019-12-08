import React from 'react';
import { AppContext } from 'component/context';
import PageHeader from 'component/pageHeader';

export default function SettingsPage() {
  const { settings, updateSettings } = React.useContext(AppContext);

  return (
    <>
      <PageHeader label="settings" />
      <div className="dashboard">
        <div className="card">
          <h2 className="card__header">Requests configuration</h2>
        </div>
        <div className="card">
          <h2 className="card__header">Page visits configuration</h2>
        </div>
      </div>
    </>
  );
}
