import {getDeck} from "../data";
import C from "./Constants";
import {combineReducers} from "redux";
// addItem : ()=> A reducer function that is used to add a  new Deck or Card .

// deck : returns {list of  decks}
export const deck = (state={},action)=>(action.type === C.GET_DECK) ?
	action.payload :
	state;

// currentDeck : {cuurentDeck select by the User}
export const currentDeck = (state={},action) => (action.type === C.CURRENT_DECK) ?
	action.payload:
	state;


export default combineReducers({
	deck,
	currentDeck
})
