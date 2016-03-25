import React, { PropTypes } from 'react';
import Navbar, { Collapse, Brand, Header } from 'react-bootstrap/lib/Navbar';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

function App({ children }) {
  return (
   <div>
    <Navbar>
      <Header>
        <Brand>
          TCG Pokedex
        </Brand>
      </Header>
      <Collapse>
        <Nav pullRight>
          <IndexLinkContainer to='/'><NavItem>Home</NavItem></IndexLinkContainer>
          <LinkContainer to='/docs'><NavItem>API Docs</NavItem></LinkContainer>
        </Nav>
      </Collapse>
    </Navbar>
    {children}
  </div>
  );
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
