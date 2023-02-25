import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
	bold: {
		fontWeight: "bold"
	}
});

export const NoInputMessage = () => {
	return (
		<View style={styles.container}>
			<Text>
        Sorry! You forgot to type <Text style={styles.bold}>the name of a city.</Text> Please try again!
			</Text>
		</View>
	);
};
