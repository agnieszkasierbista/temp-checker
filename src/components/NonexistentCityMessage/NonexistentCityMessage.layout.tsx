import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NonexistentCityMessageProps } from "./NonexistentCityMessageProps.types";

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
	bold: {
		fontWeight: "bold"
	}
});

export const NonexistentCityMessage: React.FC<NonexistentCityMessageProps> = (props) => {
	return (
		<View style={styles.container}>
			<Text>
        Sorry! The city with a name of <Text style={styles.bold}>{props.searchedString}</Text> does not exist!
			</Text>
		</View>
	);
};
