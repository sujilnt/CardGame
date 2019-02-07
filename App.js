import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from "react-native-elements";
import MainAppContainer from "./src/Component/MainApp/MainAppContainer";
import createStore from "./src/store/storeFactory";
import {Provider} from "react-redux";
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

/*
*  <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
          <Button title="Hey!"/>
      </View>
*
* */
