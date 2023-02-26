import React from "react";
import { TextInput, View } from "react-native";
import SearchButton from "../SearchButton/SearchButton";
import { styles } from "./CistySearch.styles";

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
