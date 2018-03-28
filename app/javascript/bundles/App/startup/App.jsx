import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/appStore';
import SidebarContainer from '../containers/SidebarContainer';
import GoogleMapContainer from '../containers/GoogleMapContainer';

// import { loadCountries } from '../actions/';
// const store = configureStore();
// store.dispatch(loadCountries());

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const App = (props) => (
  <Provider store={configureStore(props)}>
    <div>
      <SidebarContainer />
      <GoogleMapContainer />
    </div>
  </Provider>
);

export default App;
