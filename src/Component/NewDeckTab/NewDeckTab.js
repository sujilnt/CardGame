import React from "react";
import { StyleSheet,
	     Text,
	     View,
	     TextInput,
       Button } from 'react-native';
import {lightPurp, purple, white} from "../../utils/colors";
import CustomBackButton  from "react-native-really-awesome-button";
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
             <CustomBackButton
	             onPress={this.submitDeck}
	             width= {200}
	             backgroundColor={purple}
	             backgroundActive={lightPurp}
	             backgroundDarker={lightPurp}
	             springRelease={true}
	             disabled={false}
				 >
					 <Text style={{color:white}}>Add New Deck</Text>
             </CustomBackButton>
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
		width: 350,
		height: 50,
		padding: 10,
		borderWidth: 3,
		borderColor: '#757575',
		margin: 20
	},
	title: {
		fontSize: 30,
		color: '#333',
	}
})

export default NewDeckTab;
