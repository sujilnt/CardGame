import React from "react";
import { StyleSheet,
	     Text,
	     View,
	     TextInput,
	     KeyboardAvoidingView,
        } from 'react-native';
import {purple,lightPurp,white} from "../../utils/colors";
import CustomBackButton  from "react-native-really-awesome-button";
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
        
      };
      const updatedDeck = {
        ...this.props.currentDeck,
        questions:[
          ...this.props.currentDeck.questions,
          questionObj
        ]
      };
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
   				 <CustomBackButton
				     onPress={this.SubmitAction}
				     width= {200}
				     backgroundColor={purple}
				     backgroundActive={lightPurp}
				     backgroundDarker={lightPurp}
				     springRelease={true}
				     disabled={false}
			     >
				     <Text style={{color:white}}>Submit</Text>
			     </CustomBackButton>
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
		fontSize: 24,
		color: '#333',
	    fontWeight: "bold"
	},
    input: {
		  width: 350,
		  height: 50,
		  padding: 10,
		  borderWidth: 3,
		  borderColor: '#757575',
		  margin: 20
	},
});
export default AddCardQuestions;
