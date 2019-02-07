import React from "react";
import {StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { purple, white } from '../../utils/colors';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import DecksTab from "../DecksTabs/DecksTab";  // Renders the Decks and list of cards .
import NewDeckTab from "../NewDeckTab/NewDeckTab"; // Renders the New Deck tab.

const TabNavigator = createBottomTabNavigator({
	Home: {
		screen: DecksTab,
		navigationOptions: {
			tabBarLabel: 'DECKKKS',
			tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
		},
	},
	Settings: {
		screen: NewDeckTab,
		navigationOptions: {
			tabBarLabel: 'NewDecks',
			tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
		},
		
	},
});

const Tabs = createAppContainer(TabNavigator);

class MainApp extends React.Component{
	componentDidMount() {
		const {getDeckAction,dispatch} = this.props.action;
		dispatch(getDeckAction);
	}
	
	render(){
		console.log("this.props main Component",this.props);
		console.log("prrr");
		if(this.props.state.deck){
			return(
				<Tabs {...this.props} />
			);
		} else{
			return (
				<text>This iss a loader .....</text>
			)
		}
	}
}



export default MainApp;
