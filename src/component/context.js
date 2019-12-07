import React from 'react';
import get from 'utils/get';

export const AppContext = React.createContext();

export const Provider = ({ children }) => {
  const [data, setData] = React.useState({
    errors: [],
    crumbs: []
  });

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

  return (
    <AppContext.Provider value={{ data, uploadFile }}>
      {children}
    </AppContext.Provider>
  );
};
