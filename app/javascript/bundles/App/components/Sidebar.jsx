import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.onInputChange=this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.props.updateName(e.target.value);
  }

  render() {
    return(
      <div className="sidebar">
        <h3>
          Hello, {this.props.name}!
        </h3>
        <h3>
          Welcome to Geomap
        </h3>
        <hr />
        <form >
          <label htmlFor="name">
            Say hello to:
          </label>
          <input
            id="name"
            type="text"
            value={this.props.name}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

Sidebar.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
};

export default Sidebar;
