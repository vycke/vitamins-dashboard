import React from 'react';
import convertDateTime from '../utils/convert';
import ActionRow from './actionRow';

export default function ErrorRow({ item }) {
  const [show, setShow] = React.useState(false);

  return (
    <li className="row">
      <div className="row__header">
        <time className="header__time" dateTime={item.timestamp}>
          {convertDateTime(item.timestamp)}
        </time>
        <span className="header__tag">{item.tag}</span>
        <span className="header__message">{item.error.message}</span>
        <div className="row__divider" />
        <button onClick={() => setShow(!show)} className="header__button">
          <span>{show ? 'hide' : 'show'}</span>
        </button>
      </div>

      {show && (
        <div className="row__content">
          <span className="content__header">Message</span>
          <span className="message">{item.error.message}</span>

          {item.actions && (
            <>
              <span className="content__header">Actions</span>
              <ul>
                {item.actions.map((c, i) => (
                  <ActionRow key={i} item={c} />
                ))}
              </ul>
            </>
          )}
          {item.metadata && (
            <>
              <span className="content__header">Metadata</span>
              <pre className="language-js">
                <code>{JSON.stringify(item.metadata, null, '\t')}</code>
              </pre>
            </>
          )}
          {item.error.stack && (
            <span className="content__header">Stacktrace</span>
          )}
          {item.error.stack && (
            <pre className="language-js">
              <code>
                {item.error.stack.split('\r\n').map((c, i) => (
                  <span key={i}>{c}</span>
                ))}
              </code>
            </pre>
          )}
        </div>
      )}
    </li>
  );
}
