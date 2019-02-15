import React from "react";
import {Text,View,StyleSheet,Button} from "react-native";
import AwesomeButtonRick  from "react-native-really-awesome-button";


class DeckView extends React.PureComponent{
 static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Button
          onPress={navigation.getParam('moveToHome')}
          title="⬅"
          color="lightblue"
        />
      ),
    };
  };
  onClick = async () =>{
      const checker = this.props.navigation.state.params.entryId ;
      const {action,state}=this.props;
     this.props.navigation.navigate('AddCardQuestions',
     {
         entryId: {checker}
     });
     console.log("check title",checker,checker.title,state.deck,action.getCurrentDeckAction);
     await action.dispatch(action.getCurrentDeckAction(state.deck,checker.title));
};

componentDidMount() {
    this.props.navigation.setParams({ moveToHome: this._setHomePath });
  }

 _setHomePath = () => {
    const check = this.props.navigation.state.params.entryId ;
    this.props.navigation.navigate('Home',{
        entryId: {check}
    });
  };
  
  _startQuiz =async()=>{
    const check = this.props.navigation.state.params.entryId ;
     const {action,state}=this.props;
    this.props.navigation.navigate('Quiz',{
        entryId: {check}
    });
     await action.dispatch(action.getCurrentDeckAction(state.deck,check.title));
  };
   render(){

   const check = this.props.navigation.state.params.entryId ;
   console.log("deckview",this.props);
    if(check){
        const cardText = check.questions.length > 1 ?  `${check.questions.length} Cards` : `${check.questions.length} Card`;
      return (
      <View style={styles.container}>
          <View style={styles.margin}>
            <Text style={styles.title}>{check.title} </Text>
            <Text style={styles.cardText}>{cardText}</Text>
          </View>
          <AwesomeButtonRick
            onPress={this._startQuiz}
            type="primary"
            style={styles.border}
            width= {200}
          >
             <Text>START QUIZ</Text>
          </AwesomeButtonRick >
          <AwesomeButtonRick
              onPress={this._startQuiz}
              type="primary"
              style={styles.border}
              width= {200} >
              <Text>ADD CARD</Text>
          </AwesomeButtonRick >
      </View>
    );
  } else {
      return (
        <View style={styles.container}>
          <Text>Loading... the Deck you Selected</Text>
        </View>
      )
      }
    }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  magin:{
      marginBottom: 10
  },
  title:{
      fontSize: 28,
      textDecorationLine:"underline",
      fontWeight:"bold",
      textAlign: "center"
  },
  cardText:{
   fontSize: 18,
   fontWeight:"300",
   color: "grey",
   textAlign: "center"
  },
  border:{
    marginBottom: 20,
    marginTop: 20,
  }

});


export default DeckView;
