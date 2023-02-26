import React from "react";
import { Dimensions, Text, View } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { ChartData, TemperatureChartProps } from "./TemperatureChart.types";
import NonexistentCityMessage from "../NonexistentCityMessage/NonexistentCityMessage";
import NoInputMessage from "../NoInputMessage/NoInputMessage";

export const TemperatureChart: React.FC<TemperatureChartProps> = (props) => {

	const temperature = props.weatherData?.main.temp || 0;

	const data: ChartData = {
		labels: [props.searchedString],
		datasets: [
			{
				data: [temperature]
			}
		]
	};

	const config = {
		backgroundColor: "#ffffff",
		backgroundGradientFrom: "#ffffff",
		backgroundGradientTo: "#ffffff",
		fillShadowGradient: "#000000",
		fillShadowGradientOpacity: 1,
		decimalPlaces: 2,
		color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
		labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
		style: {
			borderRadius: 16
		},
		propsForDots: {
			r: "6",
			strokeWidth: "2",
			stroke: "#ffa726"
		}
	};

	const noCityFound = (
		props.searchedString.length
			? <NonexistentCityMessage />
			: <NoInputMessage />
	);

	const visibleResponse = (
		props.isCityFound
			? (
				<View>
					<Text>Temperature chart</Text>
					<BarChart
						data={data}
						width={Dimensions.get("window").width}
						height={220}
						chartConfig={config}
						yAxisLabel=""
						yAxisSuffix=" °C"
						fromZero={true}
					/>
				</View>
			)
			: noCityFound
	);

	return (
		props.isVisible
			? visibleResponse
			: null
	);
};
