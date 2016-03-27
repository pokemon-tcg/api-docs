import React, { Component } from 'react';
import SideNav from './side-nav';

import APISection from './api-section';
import APIData  from './api-data';

const { pokemon, series, set } = APIData;

const sections = ['#pokemon', '#series', '#set'];

export default class API extends Component {

  constructor() {
    super();

    this.state = {
      active: '#pokemon',
      sections,
      after: sections.reduce((obj, item) => {
        obj[item] = false;
        obj[`${item}-request`] = false;
        obj[`${item}-response`] = false;
        return obj;
      }, {}),
    };

    this.onBefore = this.onBefore.bind(this);
    this.onAfter = this.onAfter.bind(this);
    this.updateActiveHref = this.updateActiveHref.bind(this);
  }

  onBefore(href) {
    this.state.after[href] = false;
    this.updateActiveHref();
  }

  onAfter(href) {
    this.state.after[href] = true;
    this.updateActiveHref();
  }

  updateActiveHref() {
    let active = null;

    for (const href of Object.keys(this.state.after)) {
      if (!this.state.after[href]) {
        this.setState({ active });
        return;
      }

      active = href;
    }
  }

  render() {
    return (
      <div refs='container' className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <SideNav main={this.refs.container} activeHref={this.state.active} />
          </div>
          <div className='col-md-9'>
            <APISection onBefore={this.onBefore} onAfter={this.onAfter} data={pokemon} />
            <APISection onBefore={this.onBefore} onAfter={this.onAfter} data={series} />
            <APISection onBefore={this.onBefore} onAfter={this.onAfter} data={set} />
          </div>
        </div>
      </div>
    );
  }
}
