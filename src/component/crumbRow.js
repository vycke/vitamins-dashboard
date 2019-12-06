import React from 'react';
import convertDateTime from 'utils/convertDateTime';
import get from 'utils/get';

export default function CrumbRow({ crumb }) {
  const [show, setShow] = React.useState(false);
  return (
    <div className="row row--inline">
      <div className="row__header">
        <span className="bold">{convertDateTime(get(crumb, 'timestamp'))}</span>
        <span className="tag">{get(crumb, 'category', '')}</span>
        <span>{get(crumb, 'message', '')}</span>
        <div className="flex-grow" />
        {crumb.metadata && (
          <button onClick={() => setShow(!show)} className="button">
            <span>{show ? 'hide' : 'show'}</span>
          </button>
        )}
      </div>

      {show && crumb.metadata && (
        <div className="row__content">
          <pre className="language-js">
            <code>{JSON.stringify(crumb.metadata, null, '\t')}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
