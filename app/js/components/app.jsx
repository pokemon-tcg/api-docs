import React, { PropTypes } from 'react';
import Navbar, { Text, Link, Collapse, Toggle, Brand, Header } from 'react-bootstrap/lib/Navbar';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

function App({ children }) {
  return (
    <div>
      <Navbar fixedTop inverse>
        <Header>
          <Brand>
            TCG Pokédex
          </Brand>
          <Toggle />
        </Header>
        <Collapse>
          <Nav pullRight>
            <IndexLinkContainer to='/'><NavItem>Home</NavItem></IndexLinkContainer>
            <LinkContainer to='/docs'><NavItem>Documentation</NavItem></LinkContainer>
          </Nav>
        </Collapse>
      </Navbar>
      {children}
      <Navbar fixedBottom inverse>
        <Nav pullLeft className='pull-left margin-left-0'>
          <Text>&copy; Kristen Mills 2016</Text>
        </Nav>
        <Nav pullRight className='pull-right margin-right-0'>
          <Text>
            <Link href='https://github.com/pokemon-tcg/api'>
              <i className='fa fa-github fa-lg' />
            </Link>
          </Text>
        </Nav>
      </Navbar>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
