import React from 'react';
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

