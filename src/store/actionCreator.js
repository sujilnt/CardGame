import C from "Constants";

const addDeckAction = (deck)=>({
	type: C.ADD_DECK,
	payload: deck,
});

const addQuestion = (question)=>({
	type:C.ADD_CARD,
	payload: question
});
