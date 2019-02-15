import React, { Component } from 'react';
import Icon from "react-native-vector-icons/AntDesign";
export default class CustomBackButton extends Component {
	render() {
		return (
			<Icon.Button
				name="arrowleft"
				onPress={this.props.onPress}
			>
			</Icon.Button>
		);
	}
}


