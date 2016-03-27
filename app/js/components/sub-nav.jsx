import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';


export default function SubNav({ activeHref, href, title }) {
  return (
    <li className={activeHref.split('-')[0] === href ? 'active' : ''}>
      <a href={href}>{title}</a>
      <Nav activeHref={activeHref}>
        <NavItem href={`${href}-request`}>Request</NavItem>
        <NavItem href={`${href}-response`}>Response</NavItem>
      </Nav>
    </li>
  );
}

