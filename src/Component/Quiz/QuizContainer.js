import {connect} from "react-redux";
import Quiz from "./Quiz";
const mapStateToProps = state => {
  return {
    state: {
      ...state,
    }
  };
};
const QuizContainer = connect (mapStateToProps)(Quiz);
export default QuizContainer;