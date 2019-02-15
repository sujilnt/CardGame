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
	},
  sujil: {
		title: 'sujil',
		questions: []
	}
};

const _getCurrentDeck = (deck,id)=>{
	return {...deck[id]};
};

const _addQuestions = (data,questionObj,id)=>{
		if(data[id].questions.length >= 1 ){
		return {
			...data,
			[id]: {
				...data[id],
				questions:[...data[id].questions, questionObj]
			}
		}
	} else {
		return {
			...data,
			[id]: {
				...data[id],
				questions:[ questionObj]
			}
		}
	}
};

export const getDeckPromise =function(){
	return new Promise((res, rej) => {
		setTimeout(() => res({...data}), 1000)
	});
}; // when resolved returns a object that contains set of decks .

export const addDeckPromise = (deck,newdeck)=>{
	return  new Promise((res,rej)=>{
		setTimeout(()=>res({
			...deck,
			[newdeck.title]: newdeck
		}),1000);
	}); // when resolved returns a objects that adds another Deck to the exsisting one
};

export const getCurrentDeckPromise = (deck,deckID)=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>res(
			_getCurrentDeck(deck,deckID) // when resolved  , returns a object current Questions
		));
	})
};

export const addQuestionsPromise = (data,questionObj,id)=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>res(
			_addQuestions(data,questionObj,id)  // when resolved  , returns a object that add a question to particular deck
		));
	})
};
