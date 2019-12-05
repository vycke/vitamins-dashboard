import React from 'react';
import ErrorRow from './errorRow';

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

export default function ErrorList({ show, data }) {
  const [search, setSearch] = React.useState('');

  if (!show) return null;

  return (
    <React.Fragment>
      <div className="search">
        <span>Search: </span>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="content">
        {filter(data, search)
          .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1))
          .map((l, i) => (
            <ErrorRow key={i} log={l} />
          ))}
      </div>
    </React.Fragment>
  );
}
