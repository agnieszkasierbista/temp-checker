import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SearchButtonProps } from "./SearchButton.types";

export const SearchButton: React.FC<SearchButtonProps> = (props) => {
	return (

		<View>
			<TouchableOpacity onPress={() => props.dispatchSearch(props.userInput)}>
				<View style={styles.button}>
					{props.isSearching && <ActivityIndicator color="#ffffff"/>}
					<Text style={styles.buttonText}>
						{props.isSearching ? "Searching..." : "Search"}
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		margin: 20,
		padding: 10,
		backgroundColor: "#2196F3",
	},
	buttonText: {
		color: "#ffffff",
		fontWeight: "bold"
	}

});
