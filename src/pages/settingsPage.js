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
          <div className="card__content">
            <span className="text-small">
              These are configurations based on the 'crumb' data model of the
              vitamins package
            </span>
            <div className="input">
              <span>Request category: </span>
              <input
                value={settings.requestCategory}
                onChange={(e) =>
                  updateSettings('requestCategory', e.target.value)
                }
              />
            </div>
            <div className="input">
              <span>Response category: </span>
              <input
                value={settings.responseCategory}
                onChange={(e) =>
                  updateSettings('responseCategory', e.target.value)
                }
              />
            </div>
            <div className="input">
              <span>Response time *: </span>
              <input
                value={settings.responseTimeKey}
                onChange={(e) =>
                  updateSettings('responseTimeKey', e.target.value)
                }
              />
            </div>
            <div className="input">
              <span>Request name *: </span>
              <input
                value={settings.requestNameKey}
                onChange={(e) =>
                  updateSettings('requestNameKey', e.target.value)
                }
              />
            </div>
            <span className="text-small italic">
              * this points to a 'key' in the{' '}
              <code className="text-small">metadata</code> property of a crumb
              in the vitamins package
            </span>
          </div>
        </div>
        <div className="card">
          <h2 className="card__header">Page visits configuration</h2>
          <div className="card__content">
            <span className="text-small">
              These are configurations based on the 'crumb' data model of the
              vitamins package
            </span>
            <div className="input">
              <span>Navigation crumbs category: </span>
              <input
                value={settings.navigationCategory}
                onChange={(e) =>
                  updateSettings('navigationCategory', e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
