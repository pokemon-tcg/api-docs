import React, { Component } from 'react';

export default class Request extends Component {

  constructor() {
    super();

    this.renderTable = this.renderTable.bind(this);
  }

  renderTable(header, data) {
    if (data) {
      return (
        <div>
          <h5 className='text-center'><b>{header}</b></h5>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>Param</th>
                <th>Type</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              {data.map(query => {
                return (
                  <tr key={query.param}>
                    <td>{query.param}</td>
                    <td>{query.type}</td>
                    <td>{query.examples}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        <h3 className='page-header'>Request</h3>
        <h4><b>GET {this.props.endpoint}</b></h4>
        {this.renderTable('Path Parameters', this.props.request.path)}
        {this.renderTable('Query Parameters', this.props.request.query)}
      </div>
    );
  }

}
