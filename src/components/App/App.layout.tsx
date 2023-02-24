import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text } from "react-native";
import { AppProps } from "./App.types";
import CitySearch from "../CitySearch/CitySearch";
import TemperatureChart from "../TemperatureChart/TemperatureChart";

export const App: React.FC<AppProps> = (props) => {

	React.useEffect(() => {
		props.dispatchInit();
	}, []);

	return (
		<SafeAreaView>
			<StatusBar />
			<ScrollView>
				<Text>
          Type the city name below:
				</Text>
				<CitySearch/>
				<TemperatureChart/>
			</ScrollView>
		</SafeAreaView>
	);
};


