import React, { Component } from 'react';

export default class TryAPI extends Component {

  render() {
    return (
      <div className='input-group'>
        <span className='input-group-addon'>https://pokedex.cards/api/</span>
        <input type='text' className='form-control'/>
        <span className='input-group-btn'>
          <button className='btn btn-default'>Try API</button>
        </span>
      </div>
    );
  }

}
