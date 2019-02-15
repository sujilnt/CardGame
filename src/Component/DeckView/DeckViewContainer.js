import React from "react";
import {
  getCurrentDeck,
} from '../../store/actionCreator';

import {connect} from "react-redux";
import DeckView from "./DeckView";

const mapStateToProps = state => {
  return {
    state: {
      ...state,
    }
  };
};
const mapDispatchToProps = dispatch => {
  return {
    action: {
      getCurrentDeckAction: (deck,id) => dispatch(getCurrentDeck(deck,id)),
      dispatch,
    },
  };
};

const DeckViewContainer = connect(mapStateToProps,mapDispatchToProps)(DeckView);
export default DeckViewContainer;