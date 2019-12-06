import React from 'react';
import get from 'utils/get';
import convertDateTime from 'utils/convertDateTime';
import CrumbRow from './crumbRow';

export default function ErrorRow({ log }) {
  const [show, setShow] = React.useState(false);

  return (
    <div className="row">
      <div className="row__header">
        <span className="bold">{convertDateTime(get(log, 'timestamp'))}</span>
        <span className="tag">{get(log, 'tags', []).join(', ')}</span>
        <span className="bold">{get(log, 'error.name')}</span>
        {!show && <span className="message">{get(log, 'error.message')}</span>}
        <div className="flex-grow" />
        {(log.stack || log.breadcrumbs) && (
          <button onClick={() => setShow(!show)} className="button">
            <span>{show ? 'hide' : 'show'}</span>
          </button>
        )}
      </div>
      {show && (
        <div className="row__content">
          <span className="header">Message</span>
          <span className="message">{get(log, 'error.message')}</span>
          {log.breadcrumbs && <span className="header">Breadcrumbs</span>}
          {log.breadcrumbs &&
            log.breadcrumbs.map((c, i) => (
              <CrumbRow key={i} crumb={c} className="row--inline" />
            ))}
          {log.error.stack && <span className="header">Stacktrace</span>}
          {log.error.stack && (
            <pre className="language-js">
              <code>
                {log.error.stack.map((c, i) => (
                  <span key={i}>{c}</span>
                ))}
              </code>
            </pre>
          )}
          {log.metadata && <span className="header">Metadata</span>}
          {log.metadata && (
            <pre className="language-js">
              <code>{JSON.stringify(log.metadata, null, '\t')}</code>
            </pre>
          )}
        </div>
      )}
    </div>
  );
}
