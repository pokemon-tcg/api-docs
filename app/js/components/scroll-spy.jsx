import React from 'react';
import Waypoint from 'react-waypoint';

export default ({ href, onBefore, onAfter }) => (
  <Waypoint
    onEnter={(e, dir) => dir === 'above' && onBefore(href)}
    onLeave={(e, dir) => dir === 'above' && onAfter(href)}
    threshold={-0.02}
  />
);
