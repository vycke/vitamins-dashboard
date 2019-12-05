import React from 'react';
import CrumbRow from './crumbRow';

function filter(list, terms) {
  const termList = terms.split(' ').map((t) => t.toUpperCase());

  return list.filter(
    (l) =>
      termList.some((t) => l.message.toUpperCase().includes(t)) ||
      termList.some((t) => l.category.toUpperCase().includes(t))
  );
}

export default function CrumbList({ show, data }) {
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
            <CrumbRow key={i} crumb={l} />
          ))}
      </div>
    </React.Fragment>
  );
}
