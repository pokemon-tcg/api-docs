import React, { PropTypes } from 'react';
import Navbar, { Collapse, Toggle, Brand, Header } from 'react-bootstrap/lib/Navbar';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

function App({ children }) {
  return (
    <div>
      <Navbar fixedTop inverse>
        <Header>
          <Brand>
            TCG Pokedex
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
      <div className='navbar navbar-inverse navbar-fixed-bottom'>
        <div className='container'>
          <div className='nav navbar-left pull-left'>
            <p className='navbar-text'>&copy; Kristen Mills 2016</p>
          </div>
          <div className='nav pull-right navbar-right'>
            <p className='navbar-text'>
              <a className='navbar-link' href='https://github.com/pokemon-tcg/api'>
                <i className='fa fa-github fa-lg' />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
