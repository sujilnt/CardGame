import React from "react";
import { StyleSheet, 
	     Text,
	     View,
	     TouchableOpacity,
	     TextInput,
	     KeyboardAvoidingView,
       Button } from 'react-native';
class NewDeckTab extends React.Component{
  state={
    nameofDeck:""
  };
  submitDeck= async()=>{
    const {dispatch,addDeckAction}=this.props.action;
    const {nameofDeck}=this.state
    const newDeckObj= {
      title: nameofDeck.trim(),
      questions:[]
    };
    console.log(this.props, "NewDeck");
    this.relocate(this.props,{})
    await dispatch(addDeckAction(this.props.state.deck,newDeckObj))
  };
  relocate = async (props,check) =>{
  props.navigation.navigate('Home',
      {
        entryId: check
      });
  }

  handleChangeQuestions= (nameofDeck) => this.setState({ nameofDeck });
	render(){
		return(
			 <View style={styles.container}>
      	<Text style={styles.title}>Enter New Deck's Name?</Text>
      		 <TextInput
       			 style={styles.input}
        		 onChangeText={this.handleChangeQuestions}
                 value={this.state.nameofDeck}
             />
        	<Button 
            title="submit" 
            onPress={this.submitDeck} 
          />
      </View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		width: 300,
		height: 44,
		padding: 8,
		borderWidth: 1,
		borderColor: '#757575',
		margin: 50
	},
	title: {
		fontSize: 30,
		color: '#333',
	}
})

export default NewDeckTab;
