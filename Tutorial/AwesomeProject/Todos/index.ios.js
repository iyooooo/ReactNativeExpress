/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import { AppRegistry } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import {reducer} from './todoListRedux'
import App from './App'

const store = createStore(reducer)

const AppWithStore = () => {
  return (
    <Provider store={store}>
        <App />
    </Provider>
  )
}

AppRegistry.registerComponent('AwesomeProject', () => AppWithStore);
