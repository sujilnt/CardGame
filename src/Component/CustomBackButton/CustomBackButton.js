import React, { Component } from 'react';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export default class CustomBackButton extends Component {
	render() {
		return (
			<Icon.Button
				name="arrow-left"
				onPress={this.props.onPress}
				backgroundColor={this.props.backgroundColor}
				color={this.props.color}
				size={this.props.size}
			>
			</Icon.Button>
		);
	}
}


