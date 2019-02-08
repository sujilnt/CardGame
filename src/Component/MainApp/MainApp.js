import React from "react";
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { purple, white } from '../../utils/colors';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import DecksTab from "../DecksTabs/DecksTab";  // Renders the Decks and list of cards .
import NewDeckTab from "../NewDeckTab/NewDeckTab"; // Renders the New Deck tab.


const MyStatusBar =  ({ backgroundColor, ...props })=> {
	return (
		<View style={{ backgroundColor, height: 70 }}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props}/>
		</View>
	)
};
const TabNavigator = createBottomTabNavigator({
	Deck: {
		screen: DecksTab,
		navigationOptions: {
			tabBarLabel: 'DECKKKS',
			tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
		},
	},
	NewDeck: {
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
				<View style={{flex:1}}>
					<MyStatusBar backgroundColor={"blue"} barStyle='light-content'/>
					<Tabs {...this.props} />
				</View>
			);
		} else{
			return (
				<text>This iss a loader .....</text>
			)
		}
	}
}



export default MainApp;
