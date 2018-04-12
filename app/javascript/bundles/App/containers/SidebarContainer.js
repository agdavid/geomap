// Promoting a component to a "smart" container component

// Connect to Redux global state and action creator functions
import { connect } from 'react-redux';
import {
  updateName,
  loadCountries,
  loadSelectedCountry
} from '../actions/';
import { bindActionCreators } from 'redux';
// Select the component to promote
import Sidebar from '../components/Sidebar';

// Specify which aspect of Redux global state are props
function mapStateToProps(state) {
  return {
    name: state.name,
    countries: state.countries,
    country: state.country
  };
}

// Specify which action creator function and their return value are props
function mapDispatchToProps(dispatch) {
  // when action creator is called, pass to all reducers via dispatch
  return bindActionCreators({
    updateName: updateName,
    loadCountries: loadCountries,
    loadSelectedCountry: loadSelectedCountry,
  }, dispatch);
}

// Connect component with new props { name, updateName }
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
