import React from 'react';
import Waypoint from 'react-waypoint';


const ScrollSpy = ({ href, onBefore, onAfter }) => (
  <Waypoint
    onEnter={(e, dir) => dir === 'above' && onBefore(href)}
    onLeave={(e, dir) => dir === 'above' && onAfter(href)}
    threshold={-0.02}
  />
);

export default function APISection({ data, onBefore, onAfter }) {

  return (
    <div>
      <ScrollSpy href={`#${data.href}`} onBefore={onBefore} onAfter={onAfter} />
      <div className='json' id={data.href}>
        <h1 className='page-header'>{data.header}</h1>
        <p className='lead'>{data.description}</p>
      </div>
      <ScrollSpy href={`#${data.href}-request`} onBefore={onBefore} onAfter={onAfter} />
      <div className='json' id={`${data.href}-request`}>
        <h2 className='page-header'>Request</h2>
      </div>
      <ScrollSpy href={`#${data.href}-response`} onBefore={onBefore} onAfter={onAfter} />
      <div className='json' id={`${data.href}-request`} >
        <h2 className='page-header'>Response</h2>
      </div>
    </div>
  );
}
