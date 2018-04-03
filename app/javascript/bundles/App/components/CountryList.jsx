import React, { Component } from 'react';
import Dropdown from './Dropdown';

class CountryList extends Component {
  constructor(props) {
    super(props);
  }

  collectCountryNames(features) {
    var countriesArray = [];
    features.map(country => {
      // {name: 'Seychelles', id: 'SEY'}
      countriesArray.push({
        name: country.properties.country,
        id: country.id
      });
    })
    return countriesArray;
  };

  render() {
    if (this.props.countries.features) {
      const COUNTRIES = this.collectCountryNames(this.props.countries.features);
      return(
        <Dropdown
          id={'countries'}
          type={'select'}
          title={'Countries'}
          options={COUNTRIES} />
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
