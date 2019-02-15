import {
	getDeckPromise,
	addDeckPromise,
	addQuestionsPromise,
	getCurrentDeckPromise
} from "../data";
import C from "./Constants";

// getDeck -> A action creator tht returns the list of the decks of type Object
export const getDeck = () => async dispatch =>{
	await getDeckPromise().then((data)=> {
		return dispatch({
			type:C.GET_DECK,
			payload:data
		});
		}
	);
};

/*
    addDeck -> A action creator that add another deck to exsisting deck list .
    params : DeckName -> name of the deck
*/
export const addDeck = (deck,deckname)=> async dispatch =>{
	await addDeckPromise(deck,deckname).then((data)=>{
		return dispatch({
			type:C.GET_DECK,
			payload: data
		});
	});
};

/*
	addQuestions -> A action creator that is used for creating a questions ,
	the parameter are passed  questionsObj and id of deck  .

*/
export const addQuestions = (data,questionObj,id) => async dispatch =>{
 await addQuestionsPromise(data,questionObj,id).then((data)=>{
 	return dispatch({
	   type:C.GET_DECK,
	   payload:data
    });
 });
};
/*
*  getCurrentDeck:  A action creator that is used for retrieving current Deck when user clicks on the card .
*  params -> Deck ID
* */
export const getCurrentDeck = (deck,deckId) => async dispatch =>{
 await getCurrentDeckPromise(deck,deckId).then((data)=>{
 	return dispatch({
	    type:C.CURRENT_DECK,
	    payload:data
    })
 });
};

