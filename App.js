import React from 'react';
import { StyleSheet, Text, View ,StatusBar} from 'react-native';
import MainAppContainer from "./src/Component/MainApp/MainAppContainer";
import createStore from "./src/store/storeFactory";
import {Provider} from "react-redux";
import { Constants } from 'expo';
const store = createStore();

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <MainAppContainer/>
        </Provider>
    );
  }
  
}

