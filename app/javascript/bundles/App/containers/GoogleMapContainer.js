// Promoting a component to a "smart" container component

// Connect to Redux global state and action creator functions
import { connect } from 'react-redux';
// import { actionCreatorName } from '../actions/';
import { bindActionCreators } from 'redux';
// Select the component to promote
import GoogleMap from '../components/GoogleMap';

// Specify which aspect of Redux global state are props
function mapStateToProps(state) {
  return {
    country: state.country,
    coordinates: state.coordinates,
  };
}

// Specify which action creator function and their return value are props
function mapDispatchToProps(dispatch) {
  // when action creator is called, pass to all reducers via dispatch
  return bindActionCreators({
    // actionCreatorName: actionCreatorName
  }, dispatch);
}

// Connect component with new props { propName, actionCreatorName }
export default connect(mapStateToProps, mapDispatchToProps)(GoogleMap);
