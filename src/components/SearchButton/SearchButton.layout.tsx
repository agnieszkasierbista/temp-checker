import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SearchButtonProps } from "./SearchButton.types";
import { styles } from "./SearchButton.styles";

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

