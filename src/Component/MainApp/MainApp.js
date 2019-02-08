import React from "react";
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
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
const Tabs = TabNavigator({
	DeckList: {
		screen: DecksTab,
		navigationOptions: {
			tabBarLabel: 'Decks',
			tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={30} color={tintColor}/>
		}
	},
	AddDeck: {
		screen: NewDeckTab,
		navigationOptions: {
			tabBarLabel: 'Add Deck',
			tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor}/>
		}
	}
}, {
	tabBarOptions: {
		activeTintColor: "blue",
		style: {
			height: 56,
			backgroundColor: white,
		}
	}
});

const MainNavigator = StackNavigator({
	Home: {
		screen: Tabs,
		navigationOptions: {
			header: null
		}
	},
	DeckView: {
		screen: DecksTab,
		navigationOptions: {
			title: 'Deck Info',
			headerTintColor: purple,
			headerStyle: {
				backgroundColor: "blue",
			}
		}
	},
	AddCard: {
		screen: NewDeckTab,
		navigationOptions: {
			title: 'Add Card',
			headerTintColor: purple,
			headerStyle: {
				backgroundColor: "blue"
			}
		}
	},/*
	Quiz: {
		screen: Quiz,
		navigationOptions: {
			title: 'Quiz',
			headerTintColor: white,
			headerStyle: {
				backgroundColor: navy
			}
		}
	}*/
});


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
					<MainNavigator {...this.props} />
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
