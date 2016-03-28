import React from 'react';
import ScrollSpy from './scroll-spy';
import Request from './request';
import Response from './response';

export default function APISection({ data, onBefore, onAfter }) {

  const id = data.baseHref.substring(1);
  return (
    <div>
      <ScrollSpy href={data.baseHref} onBefore={onBefore} onAfter={onAfter} />
      <div id={id}>
        <h1 className='page-header'>{data.header}</h1>
        <p className='lead'>{data.description}</p>
      </div>
      {data.endpoints.map(endpoint => {
        return (
          <div key={endpoint.href}>
            <ScrollSpy
              href={`${data.baseHref}-${endpoint.href}`}
              onBefore={onBefore}
              onAfter={onAfter}
            />
            <div id={`${id}-${endpoint.href}`}>
              <h2 className='page-header'>{endpoint.header}</h2>
              <Request endpoint={`${data.baseEndpoint}${endpoint.endpoint}`} request={endpoint.request} />
              <Response response={endpoint.response} />
            </div>
          </div>
          );
      })}
    </div>
  );
}
