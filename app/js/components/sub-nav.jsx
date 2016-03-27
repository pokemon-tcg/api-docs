import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';


export default function SubNav({ activeHref, data }) {
  return (
    <li className={activeHref.split('-')[0] === `#${data.baseHref}` ? 'active' : ''}>
      <a href={`#${data.baseHref}`}>{data.header}</a>
      <Nav activeHref={activeHref}>
        {data.endpoints.map(endpoint => {
          return (
            <NavItem  key={endpoint.href} href={`#${data.baseHref}-${endpoint.href}`}>
              {endpoint.header}
            </NavItem>
          );
        })}
      </Nav>
    </li>
  );
}

