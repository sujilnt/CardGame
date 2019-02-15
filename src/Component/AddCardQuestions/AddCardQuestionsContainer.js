import {connect}from "react-redux";
import AddCardQuestions from "./AddCardQuestions";
import {
  addQuestions, 
} from '../../store/actionCreator';
const mapStateToProps = state =>{
	return {
		...state
	};
};

const mapDispatchToProps =  dispatch => {
  return {
    action: {
      addQuestionsAction: (deck,questionObj,id)=>dispatch(addQuestions(deck,questionObj, id)),
      dispatch,
    }
  };
};


const AddQuestionsContainer = connect(mapStateToProps,mapDispatchToProps)(AddCardQuestions);
export default AddQuestionsContainer;