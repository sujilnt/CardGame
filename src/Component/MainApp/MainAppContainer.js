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
  console.log('state mainContainer', state);
  return {
    state: {
      ...state,
      deck: state.deck ,
      currentDeck: state.currentDeck,
    },
  };
};

const mapDispatchToProps = async dispatch => {
  return {
    action: {
      getDeckAction: await dispatch(getDeck()),
      addDeckAction: deckObj => dispatch(addDeck(deckObj)),
      addQuestionsAction: (questionObj, id) =>
        dispatch(addQuestions(questionObj, id)),
      getCurrentDeckAction: id => dispatch(getCurrentDeck(id)),
      dispatch,
    },
  };
};

const MainAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainApp);

export default MainAppContainer;
