import React from "react";
import { Text, View,ScrollView ,StyleSheet,Dimensions} from 'react-native';
import DeckCard from "./DeckCard";
const { height } = Dimensions.get('window');
const renderCard = (data,props)=>{
		const listofDecks = Object.values(data);
		const renderListOFDeck = [];
		listofDecks.forEach((data,index)=>{
          renderListOFDeck.push(
          	<View style={{flex:1,height:200}}>
	            <DeckCard
					title={data.title}
					questions={data.questions}
                    parentProps = {props}
					key={index}
	            />
          	</View>
			  );
		  });
		return renderListOFDeck;
	};
class DecksTab extends React.PureComponent{
	
	render(){
    console.log("deck", this.props.deck);
    const {deck} =this.props;
		if(Object.keys(deck).length){
      return(
        <View style={{flex:1}}>
	        <View style={{height: height-35,paddingBottom:40, paddingTop: 10}}>
		        <ScrollView>
			        {renderCard(deck,this.props)}
		        </ScrollView>
	        </View>
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

