import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import AutoAffix from 'react-overlays/lib/AutoAffix';

import SubNav from './sub-nav';

export default function SideNav({ apiData, main, activeHref }) {
  return (
    <AutoAffix viewportOffsetTop={50} container={main}>
      <div className='bs-docs-sidebar hidden-print hidden-xs hidden-sm'>
        <Nav className='bs-docs-sidenav' activeHref={activeHref}>
          {apiData.map(data => {
            return (
              <SubNav
                key={data.baseHref}
                data={data}
                activeHref={activeHref}
              />
            );
          })}
        </Nav>
      </div>
    </AutoAffix>
  );
}
