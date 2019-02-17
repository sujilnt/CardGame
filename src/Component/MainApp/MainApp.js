import React from "react";
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { purple, white } from '../../utils/colors';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import DeckContainer from "../DecksTabs/DecksContainer";  // Renders the Decks and list of cards .
import NewDeckTabContainer from "../NewDeckTab/NewDeckTabContain"; // Renders the New Deck tab.
import DeckViewContainer from "../DeckView/DeckViewContainer"; // Viewing of the deck
import AddCardQuestionsContainer from "../AddCardQuestions/AddCardQuestionsContainer"; // Adding answer and Questions
import QuizContainer from "../Quiz/QuizContainer"; // Quiz

const MyStatusBar =  ({ backgroundColor, ...props })=> {
	return (
		<View style={{ backgroundColor, height: 40 }}>
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
	AddDeck: {
		screen: NewDeckTabContainer,
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
		screen: DeckViewContainer,
		navigationOptions: {
			headerTitleStyle:{
				justifyContent: "center"
			},
			title: 'Deck Information',
			headerTintColor: purple,
			headerStyle: {
				backgroundColor: "lightblue",
			}
		}
	},
	AddCardQuestions: {
		screen: AddCardQuestionsContainer,
		navigationOptions: {
			title: 'Add DeckCard',
			headerTintColor: purple,
			headerStyle: {
				backgroundColor: "lightblue"
			}
		}
	},
	Quiz: {
		screen: QuizContainer,
		navigationOptions: {
			title: 'Quiz',
			headerTintColor: purple,
			headerStyle: {
				backgroundColor: "lightblue"
			}
		}
	}
});


class MainApp extends React.PureComponent{
	render(){
    const keys = Object.keys(this.props.state.deck);
		if(keys.length > 0){
			return(
				<View style={styles.flex1}>
					<MainNavigator />
				</View>
			);
		} else{
			return (
			 <View style={[styles.flex1,styles.container]}>
            <Text>
               App loading.....
            </Text>
       </View>
			)
		}
	}
}

const styles = StyleSheet.create({
  flex1:{
    flex:1,
  },
  container:{
    justifyContent:"center",
    alignItems:"center"
  }
});

export default MainApp;
