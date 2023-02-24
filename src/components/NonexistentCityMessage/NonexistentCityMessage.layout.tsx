import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NonexistentCityMessageProps } from "./NonexistentCityMessageProps.types";

const styles = StyleSheet.create({
	bold: {
		fontWeight: "bold"
	}
});

export const NonexistentCityMessage: React.FC<NonexistentCityMessageProps> = (props) => {
	return (
		<View>
			<Text>
        Sorry! The city with a name of <Text style={styles.bold}>{props.searchedString}</Text> does not exist!
			</Text>
		</View>
	);
};
