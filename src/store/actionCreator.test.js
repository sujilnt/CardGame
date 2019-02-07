import expect from "expect";
import {getCurrentDeck, addQuestions,getDeck,addDeck} from "./actionCreator";
import C from "./Constants";

const data={
	React: {
		title: 'React',
		questions: [
			{
				question: 'What is React?',
				answer: 'A library for managing user interfaces'
			},
			{
				question: 'Where do you make Ajax requests in React?',
				answer: 'The componentDidMount lifecycle event'
			}
		]
	},
	JavaScript: {
		title: 'JavaScript',
		questions: [
			{
				question: 'What is a closure?',
				answer: 'The combination of a function and the lexical environment within which that function was declared.'
			}
		]
	}
};

export const testCasesForCardgame = async (store)=>{
	// check whether getDeck action creation works fine .
	await store.dispatch(
		getDeck()
	);
	console.log("currentState_GET_STATE",store.getState());
	expect(Object.keys(store.getState().deck).length).toEqual(2);
	console.log(`
		getDeck() Action Creator Works!!!
	`);
	
	// addDeckActionTest : - A test case to check whether the action creator has the right behavious .
	
	await store.dispatch(
		addDeck({
			title: "sujilsdeck",
			questions:[{
				questions:"what is Css",
				answer: "Cascading Style Sheets"
			}]
		})
	);
	console.log("currentState_ADD_DECK",store.getState());
	const check =Object.keys(store.getState().deck).length; // length of current of state of cards
	expect(check).toEqual(3);
	console.log(`
		addDeck() Action Creator Works!!!
	`);
	
	// addQuestions : - A test case to check whether the questions is added to deck correctly .
	
	await store.dispatch(
		addQuestions({
			question: "what is Js ?",
			answer: "JS is a Language"
		},
		"JavaScript"
	));
	const checkDECK =store.getState().deck;
	const checkDECKQUESTION=checkDECK["JavaScript"].questions.length;
	console.log("currentState_ADD_QUESTIONS",store.getState());
	expect(checkDECKQUESTION).toEqual(2);
	console.log(`
		addQuestions() Action Creator Works!!!
	`);
	
	// getCurrentDeck : - A test case to retrieve the current Deck from the list of Deck based on ID .
	
	await store.dispatch(
		getCurrentDeck("React")
	);
	
	const currentTitle =store.getState().currentDeck;
	console.log("currentState_GETCurrent_DECK",store.getState());
	expect(currentTitle.title).toEqual("React");
	
	console.log(`
		getCurrentDeck() Action Creator Works!!!
	`);
	
};

