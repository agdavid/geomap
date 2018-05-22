class CountryApi {

  static getAllCountries() {
    return fetch('https://www.geoconnect.org/api/geojson?api_key=41208206feb9e0025a0491a171fe56f0').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    })
  };

  static getSelectedCountry(geoconnect_id) {
    return fetch('https://www.geoconnect.org/api/' + geoconnect_id + '/geojson?api_key=41208206feb9e0025a0491a171fe56f0').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    })
  }

}

export default CountryApi;
