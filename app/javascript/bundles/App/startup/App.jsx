import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/appStore';
import HelloWorldContainer from '../containers/HelloWorldContainer';
import GoogleMapContainer from '../containers/GoogleMapContainer';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const App = (props) => (
  <div>
    <Provider store={configureStore(props)}>
      <HelloWorldContainer />
    </Provider>
    <Provider store={configureStore(props)}>
      <GoogleMapContainer />
    </Provider>
  </div>
);

export default App;
