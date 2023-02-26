import React from "react";
import { Text, View } from "react-native";
import { styles } from "./NoInputMessage.styles";

export const NoInputMessage = () => {
	return (
		<View style={styles.container}>
			<Text>
        Sorry! You forgot to type <Text style={styles.bold}>the name of a city.</Text> Please try again!
			</Text>
		</View>
	);
};
