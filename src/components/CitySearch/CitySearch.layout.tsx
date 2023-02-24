import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import SearchButton from "../SearchButton/SearchButton";

const styles = StyleSheet.create({
	container: {
		marginBottom: 15
	},
	input: {
		fontSize: 20,
		margin: 10,
		padding: 10,
		width: "95%",
		borderWidth: 1
	}
});


export const CitySearch = () => {

	const [userInput,setUserInput] = React.useState("");

	return (
		<View
			style={styles.container}
		>
			<TextInput
				style={styles.input}
				placeholder="Search"
				onChangeText={(userInput) => {
					console.log(123, userInput);

					setUserInput(userInput);
				}}
				value={userInput}
			/>
			<SearchButton
				userInput={userInput}
			/>
		</View>
	);
};
