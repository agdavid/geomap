// Promoting a component to a "smart" container component

// Connect to Redux global state and action creator functions
import { connect } from 'react-redux';
import { updateName } from '../actions/index';
import { bindActionCreators } from 'redux';
// Select the component to promote
import HelloWorld from '../components/HelloWorld';

// Specify which aspect of Redux global state are props
function mapStateToProps(state) {
  return {
    name: state.name
  };
}

// Specify which action creator function and their return value are props
function mapDispatchToProps(dispatch) {
  // when updateName action creator is called, pass to all reducers via dispatch
  return bindActionCreators({ updateName: updateName }, dispatch);
}

// Connect component with new props { name, updateName }
export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
