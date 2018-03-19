import ReactOnRails from 'react-on-rails';

import App from '../bundles/App/startup/App';

// This is how react_on_rails can see the root App component in the browser.
ReactOnRails.register({
  App,
});
