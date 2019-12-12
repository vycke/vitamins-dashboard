import React from 'react';
import { AppContext } from 'component/context';
import PageHeader from 'component/pageHeader';
import Input from 'component/input';
import Toggle from 'component/toggle';
import Dropdown from 'component/dropdown';

const options = [
  { label: 'GUID', value: 'guid' },
  { label: 'BSON ID', value: 'bson' }
];

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
            <Input
              value={settings.requestCategory}
              onChange={(v) => updateSettings('requestCategory', v)}
              label="Request category:"
            />
            <Input
              value={settings.responseCategory}
              onChange={(v) => updateSettings('responseCategory', v)}
              label="Response category:"
            />
            <Input
              value={settings.responseTimeKey}
              onChange={(v) => updateSettings('responseTimeKey', v)}
              label="Response time *:"
            />
            <Input
              value={settings.requestNameKey}
              onChange={(v) => updateSettings('requestNameKey', v)}
              label="Request name *:"
            />
            <span className="text-small italic">
              * this points to a 'key' in the{' '}
              <code className="text-small">metadata</code> property of a crumb
              in the vitamins package
            </span>
          </div>
        </div>
        <div className="card">
          <h2 className="card__header">Page visits configuration</h2>
          <div className="card__content card__content--left">
            <span className="text-small">
              These are configurations based on the 'crumb' data model of the
              vitamins package
            </span>
            <Input
              value={settings.navigationCategory}
              onChange={(v) => updateSettings('navigationCategory', v)}
              label="Navigation category:"
            />
            <div className="flex-row gap-top">
              <label>Obfuscate unique IDs:</label>
              <Toggle
                value={settings.obfuscateIds}
                onClick={(v) => updateSettings('obfuscateIds', v)}
              />
            </div>
            {settings.obfuscateIds && (
              <Dropdown
                options={options}
                className="gap-top"
                label="Type of ID"
                value={settings.idType}
                onChange={(v) => updateSettings('idType', v)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
