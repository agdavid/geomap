import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <label htmlFor={this.props.id}>{this.props.title}
          <select id={this.props.id} name={this.props.id}>
              {this.props.options.map(function(option, i) {
                  return <option val={option.id} key={option.id}>{option.name}</option>
              })}
          </select>
      </label>
    );
  }
}

export default Dropdown;
