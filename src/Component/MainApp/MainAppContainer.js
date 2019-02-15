import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import MainApp from './MainApp';
import {
  getCurrentDeck,
  addQuestions,
  getDeck,
  addDeck,
} from '../../store/actionCreator';

const mapStateToProps = state => {
  return {
    state: {
      ...state,
      deck: state.deck ,
      currentDeck: state.currentDeck,
    },
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: {
      getDeckAction: dispatch(getDeck()),
      addQuestionsAction: (questionObj, id) =>
        dispatch(addQuestions(questionObj, id)),
      dispatch,
    },
  };
};

const MainAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainApp);

export default MainAppContainer;
