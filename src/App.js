import React, {useEffect, useState} from 'react';

// import {PermissionsAndroid, Platform} from 'react-native';
// import Geolocation from '@react-native-community/geolocation';

import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';

import {API_KEY} from './config';
import store from './redux/store';
import Router from './router';

const App = () => {
  console.log('INI API KEY:', API_KEY);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
