import React from 'react';
import get from 'utils/get';
import { regexp } from '../constants';

export const AppContext = React.createContext();

export const Provider = ({ children }) => {
  const [data, setData] = React.useState({
    errors: [],
    crumbs: []
  });
  const [settings, setSettings] = React.useState({
    navigationCategory: 'navigation',
    requestCategory: 'request',
    responseCategory: 'response',
    responseTimeKey: 'time',
    requestNameKey: 'name',
    obfuscateIds: true,
    idType: 'guid',
    numberOfSteps: 50
  });

  const updateSettings = (key, value) => {
    setSettings({
      ...settings,
      [key]: value
    });
  };

  const uploadFile = (files, type = 'errors') => {
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = function(event) {
        setData((old) => ({
          ...old,
          [type]: get(old, type, [])
            .concat(JSON.parse(event.target.result))
            .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1))
        }));
      };
      reader.readAsText(files[i]);
    }
  };

  const navigations = data.crumbs
    .filter((c) => c.category === settings.navigationCategory)
    .map((c) => {
      if (!settings.obfuscateIds) return c;
      return {
        ...c,
        message: c.message.replace(regexp[settings.idType], '***')
      };
    });
  const responses = data.crumbs.filter(
    (c) => c.category === settings.responseCategory
  );
  const requests = data.crumbs.filter(
    (c) => c.category === settings.requestCategory
  );

  return (
    <AppContext.Provider
      value={{
        data,
        uploadFile,
        settings,
        updateSettings,
        navigations,
        requests,
        responses
      }}>
      {children}
    </AppContext.Provider>
  );
};
