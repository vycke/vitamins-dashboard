import React from 'react';
import PageHeader from 'component/pageHeader';
import SearchBar from 'component/searchBar';
import { AppContext } from 'component/context';
import CrumbRow from 'component/crumbRow';

function filter(list, terms) {
  const termList = terms.split(' ').map((t) => t.toUpperCase());

  return list.filter(
    (l) =>
      termList.some((t) => l.message.toUpperCase().includes(t)) ||
      termList.some((t) => l.category.toUpperCase().includes(t))
  );
}

export default function CrumbPage() {
  const { uploadFile, data } = React.useContext(AppContext);
  const [search, setSearch] = React.useState('');
  const [show, setShow] = React.useState(25);
  const handleShow = () => setShow(show + 25);

  return (
    <>
      <PageHeader label="crumbs" file="crumbs" onUpload={uploadFile} />
      <SearchBar value={search} onChange={setSearch} />
      {filter(data.crumbs, search)
        .slice(0, show)
        .map((l, i) => (
          <CrumbRow key={i} crumb={l} />
        ))}
      {data.crumbs.length > show && (
        <button className="more" onClick={handleShow}>
          More...
        </button>
      )}
    </>
  );
}
