import {connect} from "react-redux";
import {
  addDeck,
} from '../../store/actionCreator';
import NewDeckTab from "./NewDeckTab";
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
      addDeckAction: (deck,deckObj) => dispatch(addDeck(deck,deckObj)),
      dispatch,
    },
  };
};
const NewDeckTabContainer = connect(mapStateToProps,mapDispatchToProps)(NewDeckTab);
export default NewDeckTabContainer;