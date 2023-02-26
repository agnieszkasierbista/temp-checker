import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text } from "react-native";
import CitySearch from "../CitySearch/CitySearch";
import TemperatureChart from "../TemperatureChart/TemperatureChart";

export const App: React.FC = () => {
	return (
		<SafeAreaView>
			<StatusBar />
			<ScrollView
				keyboardShouldPersistTaps="handled"
			>
				<Text>
          Type the city name below:
				</Text>
				<CitySearch />
				<TemperatureChart />
			</ScrollView>
		</SafeAreaView>
	);
};


