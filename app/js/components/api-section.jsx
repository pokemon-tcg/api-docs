import React from 'react';
import ScrollSpy from './scroll-spy';

export default function APISection({ data, onBefore, onAfter }) {

  return (
    <div>
      <ScrollSpy href={`#${data.baseHref}`} onBefore={onBefore} onAfter={onAfter} />
      <div id={data.baseHref}>
        <h1 className='page-header'>{data.header}</h1>
        <p className='lead'>{data.description}</p>
      </div>
      {data.endpoints.map(endpoint => {
        return (
          <div key={endpoint.href}>
            <ScrollSpy
              href={`#${data.baseHref}-${endpoint.href}`}
              onBefore={onBefore}
              onAfter={onAfter}
            />
            <div id={`${data.baseHref}-${endpoint.href}`}>
              <h2 className='page-header'>{endpoint.header}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}
