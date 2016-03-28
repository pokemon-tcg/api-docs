import React from 'react';
import { Link } from 'react-router';
import TryAPI from './try-api';

export default function API() {
  return (
    <div>
      <div className='jumbotron'>
        <div className='container text-center'>
          <h1>TCG Pokédex</h1>
          <h2>The RESTful Pokémon Trading Card Game API</h2>
        </div>
      </div>
      <div className='container'>
        <h2 className='text-center'>Try it now!</h2>
        <TryAPI />
        <div className='row'>
          <div className='col-md-4'>
            <h3>What is this?</h3>
            <div className='well'>
              <p>This is a RESTful API for accessing full card information from pokémon TCG.</p>
            </div>
          </div>
          <div className='col-md-4'>
            <h3>Where do I start?</h3>
            <div className='well'>
              <p>
                Check out the <Link to='/docs'>documentation</Link> on how to use the API.

                We also have an official javascript client library with more languages to come.
              </p>
            </div>
          </div>
          <div className='col-md-4'>
            <h3>How do I help?</h3>
            <div className='well'>
              <p>
                Check out our issues on <a href='https://github.com/pokemon-tcg/api' target='_blank'>Github</a> and feel free to make a pull request!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
