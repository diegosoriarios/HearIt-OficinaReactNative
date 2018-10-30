import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Header extends React.Component{
	render(){
		return(
			<View style={styles.header}>
				<Text style={styles.title}>
					#{this.props.title}
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	header: {
		height: 80,
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: 10,
	},
	title: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 24,
	},
});