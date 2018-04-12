import CountryApi from '../api/countryApi';
import {
  LOAD_COUNTRIES_SUCCESS,
  LOAD_COUNTRY_SUCCESS
} from '../constants/';

export function loadCountries() {
  return function(dispatch) {
    return CountryApi.getAllCountries().then(countries => {
      dispatch(loadCountriesSuccess(countries));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadCountriesSuccess(countries) {
  return {
    type: LOAD_COUNTRIES_SUCCESS,
    countries: countries,
  }
}

export function loadSelectedCountry(geoconnect_id) {
    return function(dispatch) {
      return CountryApi.getSelectedCountry(geoconnect_id).then(country => {
        dispatch(loadSelectedCountrySuccess(country));
      }).catch(error => {
        throw(error);
      });
    };
}

export function loadSelectedCountrySuccess(country) {
  return {
    type: LOAD_COUNTRY_SUCCESS,
    country: country
  }
}
