/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView} from 'react-native';

import HomeScreen from './src/screens/Home';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => React$Node = () => {
  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
