import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import AutoAffix from 'react-overlays/lib/AutoAffix';

import SubNav from './sub-nav';

export default function SideNav({ main, activeHref }) {
  return (
    <AutoAffix viewportOffsetTop={65} container={main}>
      <div className='bs-docs-sidebar hidden-print hidden-xs hidden-sm'>
        <Nav className='bs-docs-sidenav' activeHref={activeHref}>
          <SubNav href='#pokemon' title='Pokemon' activeHref={activeHref} />
          <SubNav href='#series' title='Serires' activeHref={activeHref} />
          <SubNav href='#set' title='Set' activeHref={activeHref} />
        </Nav>
      </div>
    </AutoAffix>
  );
}
