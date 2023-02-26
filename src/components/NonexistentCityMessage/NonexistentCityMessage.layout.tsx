import React from "react";
import { Text, View } from "react-native";
import { NonexistentCityMessageProps } from "./NonexistentCityMessageProps.types";
import { styles } from "./NonexistentCityMessage.styles";

export const NonexistentCityMessage: React.FC<NonexistentCityMessageProps> = (props) => {
	return (
		<View style={styles.container}>
			<Text>
        Sorry! The city with a name of <Text style={styles.bold}>{props.searchedString}</Text> does not exist!
			</Text>
		</View>
	);
};
