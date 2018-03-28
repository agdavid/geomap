import CountryApi from '../api/countryApi';
import {
  LOAD_COUNTRIES_SUCCESS
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
