import React, {useEffect, useState} from 'react';

// import {PermissionsAndroid, Platform} from 'react-native';
// import Geolocation from '@react-native-community/geolocation';

import {NavigationContainer} from '@react-navigation/native';

import {Provider, useDispatch, useSelector} from 'react-redux';

import store from './redux/store';
import Router from './router';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
