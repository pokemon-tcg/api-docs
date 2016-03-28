import React, { Component } from 'react';
import SideNav from './side-nav';

import APISection from './api-section';
import apiData  from './api-data';

export default class API extends Component {

  constructor() {
    super();

    this.state = {
      active: apiData[0].baseHref,
      apiData,
      after: apiData.reduce((obj, item) => {
        obj[item.baseHref] = false;
        item.endpoints.forEach(endpoint => {
          obj[`${item.baseHref}-${endpoint.href}`] = false;
        });
        return obj;
      }, {}),
    };


    this.onBefore = this.onBefore.bind(this);
    this.onAfter = this.onAfter.bind(this);
    this.updateActiveHref = this.updateActiveHref.bind(this);

  }

  componentDidMount() {
    for (const href of Object.keys(this.state.after)) {
      this.state.after[href] = true;
      if (href === this.props.location.hash) {
        this.updateActiveHref();
        break;
      }
    }
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
    this.setState({ active });
  }

  render() {
    return (
      <div refs='container' className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <SideNav
              main={this.refs.container}
              activeHref={this.state.active}
              apiData={this.state.apiData}
            />
          </div>
          <div id='api' className='col-md-9'>
            {this.state.apiData.map(data => {
              return (
                <APISection
                  key={data.baseHref}
                  onBefore={this.onBefore}
                  onAfter={this.onAfter}
                  data={data}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
