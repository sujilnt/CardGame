import React from "react";
import { Text, View,ScrollView ,StyleSheet,FlatList} from 'react-native';
import DeckCard from "./DeckCard";

const renderCard = (data,props)=>{
		const listofDecks = Object.values(data);
		const renderListOFDeck = [];
		listofDecks.forEach((data,index)=>{
			  renderListOFDeck.push(
          <DeckCard
					  title={data.title}
					  questions={data.questions}
            parentProps = {props}
            key={index}
				  />
			  );
		  })
		return renderListOFDeck;
	};
class DecksTab extends React.Component{
	
	render(){
    const {deck} =this.props;
		console.log("deckcard",this.props.deck);
		if(Object.keys(deck).length){
      return(
      <View style={{flex:2}}>
         <ScrollView contentContainerStyle={styles.contentContainer}>
         {renderCard(deck,this.props)}
			</ScrollView>
      </View>
		);
    } else {
        return(
            <View>
               <Text>Data loading .... </Text>
            </View>
      );
    }
	}
}
const styles = StyleSheet.create({
	contentContainer: {
		paddingVertical: 20,
    backgroundColor:"green"
	}
});

export default DecksTab;

