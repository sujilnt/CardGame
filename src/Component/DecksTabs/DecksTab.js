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
class DecksTab extends React.PureComponent{
	
	render(){
    console.log("deck", this.props.deck);
    const {deck} =this.props;
		if(Object.keys(deck).length){
      return(
        <View style={{flex:1,flexGrow: 1}}>
         <ScrollView contentContainerStyle={styles.contentContainer}>
        {renderCard(deck,this.props)}
			    </ScrollView>
        </View>  
		);
    } else {
        return(
            <View style={styles.loadercontainer}>
               <Text>list of Deck loading .... </Text>
            </View>
      );
    }
	}
}
const styles = StyleSheet.create({
	contentContainer: {
		paddingVertical: 20,
    flex:2,
    flexWrap: "wrap",
    flexDirection:"column",
    height:"100%"
	},
  loadercontainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  container:{
    flex:1,
    height:100
  }

});

export default DecksTab;

