import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.onSelectChange=this.onSelectChange.bind(this);

  }

  onSelectChange(e) {
    this.props.loadSelectedCountry(e.target.value);
  }

  render() {
    return(
      <label htmlFor={this.props.id}>{this.props.title}
          <select
            id={this.props.id}
            name={this.props.id}
            onChange={this.onSelectChange}
            >
              {this.props.options.map(function(option, i) {
                  return <option value={option.id} key={option.id}>{option.name}</option>
              })}
          </select>
      </label>
    );
  }
}

export default Dropdown;
