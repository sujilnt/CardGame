import React from "react";
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { purple, white } from '../../utils/colors';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import DeckContainer from "../DecksTabs/DecksContainer";  // Renders the Decks and list of cards .
import NewDeckTab from "../NewDeckTab/NewDeckTab"; // Renders the New Deck tab.
import DeckView from "../DeckView/DeckView"; // Viewing of the deck 
import AddCardQuestion from "../AddCardQuestions/AddCardQuestions"; // Add Card Questions
const MyStatusBar =  ({ backgroundColor, ...props })=> {
	return (
		<View style={{ backgroundColor, height: 20 }}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props}/>
		</View>
	)
};
const Tabs = TabNavigator({
	DeckList: {
		screen: DeckContainer,
		navigationOptions: {
			tabBarLabel: 'Decks',
			tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={30} color={tintColor}/>
		}
	},
	NewDeckTab: {
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
      color: "black"
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
		screen: DeckView,
		navigationOptions: {
			title: 'Deck',
			headerTintColor: purple,
			headerStyle: {
				backgroundColor: "lightblue",
			}
		}
	},
	AddCardQuestion: {
		screen: AddCardQuestion,
		navigationOptions: {
			title: 'Add DeckCard',
			headerTintColor: purple,
			headerStyle: {
				backgroundColor: "lightblue"
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
	render(){
    const keys = Object.keys(this.props.state.deck);
    console.log("keys",keys);
		if(keys.length > 0){
         console.log("kkkkk", keys.length);
         
			return(
				<View style={{flex:1}}>
					<MainNavigator />
				</View>
			);
		} else{
			return (
			 <View>	
            <Text> 
               loader .....
            </Text>
       </View>
			)
		}
	}
}



export default MainApp;
