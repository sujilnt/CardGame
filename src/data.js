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

const _getCurrentDeck = (id)=>{
	return {...data[id]};
};

const _addQuestions = (questionObj,id)=>{
		return {
			...data,
			[id]: {
				...data[id],
				questions:[...data[id].questions, questionObj]
			}
		}
};

export const getDeckPromise =function(){
	return new Promise((res, rej) => {
		setTimeout(() => res({...data}), 1000)
	});
}; // when resolved returns a object that contains set of decks .

export const addDeckPromise = (newdeck)=>{
	return  new Promise((res,rej)=>{
		setTimeout(()=>res({
			...data,
			[newdeck.title]: newdeck
		}),1000);
	}); // when resolved returns a objects that adds another Deck to the exsisting one
};

export const getCurrentDeckPromise = (deckID)=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>res(
			_getCurrentDeck(deckID) // when resolved  , returns a object current Questions
		));
	})
};

export const addQuestionsPromise = (questionObj,id)=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>res(
			_addQuestions(questionObj,id)  // when resolved  , returns a object that add a question to particular deck
		));
	})
};
