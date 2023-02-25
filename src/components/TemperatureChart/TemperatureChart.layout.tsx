import React from "react";
import { Dimensions, Text, View } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { TemperatureChartProps } from "./TemperatureChart.types";
import NonexistentCityMessage from "../NonexistentCityMessage/NonexistentCityMessage";
import NoInputMessage from "../NoInputMessage/NoInputMessage";

export const TemperatureChart: React.FC<TemperatureChartProps> = (props) => {

	const temperature= props.isCityFound && props.data.main.temp;

	const data = {
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

	return (
		props.isVisible
			?
			props.isCityFound
				?
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
				:
				props.searchedString.length
					?
					<NonexistentCityMessage />
					:
					<NoInputMessage />
			:
			null

	);
};
