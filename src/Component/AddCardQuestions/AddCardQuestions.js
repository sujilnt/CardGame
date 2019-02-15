import React from "react";
import { StyleSheet, 
	     Text,
	     View,
	     TouchableOpacity,
	     TextInput,
	     KeyboardAvoidingView,
       Button } from 'react-native';

class AddCardQuestions extends React.PureComponent{
  state={
      question: "",
      answers: ""
  };
  SubmitAction = async ()=>{
    const {addQuestionsAction,dispatch} =this.props.action;
    const {question,answers }=this.state;
    console.log("check",this.props,this.state);
    if(question !== undefined && answers !== undefined){
      const questionObj ={
        question: question.trim(),
        answer: answers.trim(),
        
      }
      const updatedDeck = {
        ...this.props.currentDeck,
        questions:[
          ...this.props.currentDeck.questions,
          questionObj
        ]
      }
     console.log("check",this.props,updatedDeck);
      this.relocate(this.props,updatedDeck);
      await dispatch(addQuestionsAction(this.props.deck,questionObj,this.props.currentDeck.title));
    } 
  };
  
  relocate = async (props,check) =>{
  props.navigation.navigate('DeckView',
  {
      entryId: check
  });
};
  handleChangeQuestions= (question) => this.setState({ question });
  handleChangeAnswers= (answers) => this.setState({ answers });
  render(){
      return (
       <KeyboardAvoidingView behavior='padding'  style={styles.container}>		
			<View style={styles.container}>
				<Text >What is the question?</Text>
			      <Text style={styles.title}>What is the question?</Text>
			       <TextInput
			        style={styles.input}
			        onChangeText={this.handleChangeQuestions}
			        value={this.state.question}
			      />
			      <Text style={styles.title}>Display answer?</Text>
			       <TextInput
			        style={styles.input}
              placeHolder="enter your answer"
			        onChangeText={this.handleChangeAnswers}
			        value={this.state.answer}
			      />
   				 <Button title="Submit" onPress={this.SubmitAction}/> 
			</View>
		</KeyboardAvoidingView>	
      );
  }
}
const styles = StyleSheet.create({
   container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
  title: {
		fontSize: 20,
		color: '#333',
	},
    input: {
		  width: 250,
		  height: 40,
		  padding: 8,
		  borderWidth: 1,
		  borderColor: '#757575',
		  margin: 20
	},
})
export default AddCardQuestions;