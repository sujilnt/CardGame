import DecksTab from "./DecksTab";
import {connect}from "react-redux";

const mapStateToProps = state =>{
	return {
		...state
	};
};

const DeckContainer = connect(mapStateToProps)(DecksTab);

export default DeckContainer;