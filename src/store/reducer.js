import C from "Constants";
import {combineReducers} from "reducer";
// addItem : ()=> A reducer function that is used to add a  new Deck or Card .

const addItem = (state={},action) =>{
	switch(action.type){
		case C.ADD_CARD:
			return {
				card: [...state.card, action.payload ]
			};
		case C.ADD_DECK:
			return{
				deck: [...state.deck,action.payload]
			};
		default:
			return {
				...state
			};
	}
};


export default combineReducers({
	addItem,
})
