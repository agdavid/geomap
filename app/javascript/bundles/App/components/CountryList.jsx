import React, { Component } from 'react';

class CountryList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.countries.features) {
      return(
        <ul>
          {this.props.countries.features.map(country =>
            <li>
            {country.properties.country}
            </li>
          )}
        </ul>
      );
    } else {
      return(
        <div>
        Loading countries...
        </div>
      )
    }
  }
}

export default CountryList;
