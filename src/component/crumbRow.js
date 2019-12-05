import React from 'react';
import convertDateTime from 'utils/convertDateTime';
import get from 'utils/get';

export default function CrumbRow({ crumb }) {
  return (
    <div className="row row--inline">
      <div className="row__header">
        <span className="bold">{convertDateTime(get(crumb, 'timestamp'))}</span>
        <span className="tag">{get(crumb, 'category', '')}</span>
        <span>{get(crumb, 'message', '')}</span>
      </div>
    </div>
  );
}
