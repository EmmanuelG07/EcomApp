import {View, Text} from 'react-native';
import React from 'react';
import AppNavigation from './navigation/AppNavigation';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import MessageComponent from './components/MessageComponent/MessageComponent';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
      <MessageComponent />
    </Provider>
  );
};

export default App;
