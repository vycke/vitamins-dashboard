import React from 'react';
import ErrorList from './errorList';
import CrumbList from './crumbList';
import get from 'utils/get';

export default function App() {
  const [tab, setTab] = React.useState('error');
  const [data, setData] = React.useState({});

  const handleNewFiles = (f) => {
    for (let i = 0; i < f.length; i++) {
      const reader = new FileReader();
      reader.onload = function(event) {
        setData((old) => ({
          ...old,
          [tab]: get(old, tab, []).concat(JSON.parse(event.target.result))
        }));
      };
      reader.readAsText(f[i]);
    }
  };

  return (
    <main className="container">
      <header>
        <h1>Vitamins dashboard</h1>
        <div className="controls">
          <div className="switch">
            <button
              data-selected={tab === 'error'}
              onClick={() => setTab('error')}>
              Errors
            </button>
            <button
              data-selected={tab === 'crumb'}
              onClick={() => setTab('crumb')}>
              Crumbs
            </button>
          </div>
          <div className="flex-grow" />
          <input
            id="upload"
            type="file"
            multiple
            className="visually-hidden"
            onChange={(e) => handleNewFiles(e.target.files)}
          />
          <label htmlFor="upload">{`Select ${tab} file(s)`}</label>
        </div>
      </header>
      <ErrorList show={tab === 'error'} data={get(data, 'error', [])} />
      <CrumbList show={tab === 'crumb'} data={get(data, 'crumb', [])} />
    </main>
  );
}
