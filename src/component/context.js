import React from 'react';
import get from 'utils/get';
import { regexp } from '../constants';

export const AppContext = React.createContext();

export const Provider = ({ children }) => {
  const [data, setData] = React.useState({
    errors: [],
    actions: []
  });
  const [settings, setSettings] = React.useState({
    navigationCategory: 'navigation',
    requestCategory: 'request',
    responseCategory: 'response',
    responseTimeKey: 'time',
    requestNameKey: 'name',
    obfuscateIds: true,
    idType: 'guid',
    numberOfSteps: 50,
    graphType: 'step'
  });

  const updateSettings = (key, value) => {
    setSettings({
      ...settings,
      [key]: value
    });
  };

  const uploadFile = (files) => {
    const reader = new FileReader();
    reader.onload = function(event) {
      const data = JSON.parse(event.target.result);
      setData((old) => ({
        ...old,
        actions: get(old, 'actions', [])
          .concat(data.actions)
          .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1)),
        errors: get(old, 'errors', [])
          .concat(data.errors)
          .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1))
      }));
    };
    reader.readAsText(files[0]);
  };

  const navigations = data.actions
    .filter((c) => c.category === settings.navigationCategory)
    .map((c) => {
      if (!settings.obfuscateIds) return c;
      return {
        ...c,
        message: c.message.replace(regexp[settings.idType], '***')
      };
    });
  const responses = data.actions.filter(
    (c) => c.category === settings.responseCategory
  );
  const requests = data.actions.filter(
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
