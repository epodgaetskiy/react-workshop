import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import Shows from './Shows/ShowsList';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Shows />
      </Provider>
    );
  }
}
