import React from 'react';
import convertDateTime from '../utils/convert';

export default function ActionRow({ item }) {
  const [show, setShow] = React.useState(false);

  return (
    <li className="row">
      <div className="row__header">
        <time className="header__time" dateTime={item.timestamp}>
          {convertDateTime(item.timestamp)}
        </time>
        <span className="header__tag">{item.tag}</span>
        <span className="header__message">{item.message}</span>
        <div className="row__divider" />
        {item.metadata && (
          <button onClick={() => setShow(!show)} className="header__button">
            <span>{show ? 'hide' : 'show'}</span>
          </button>
        )}
      </div>

      {show && item.metadata && (
        <div className="row__content">
          <pre className="language-js">
            <code>{JSON.stringify(item.metadata, null, '\t')}</code>
          </pre>
        </div>
      )}
    </li>
  );
}
