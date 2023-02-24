import React from "react";
import { Dimensions, Text, View } from "react-native";
import {BarChart} from "react-native-chart-kit";
import { TemperatureChartProps } from "./TemperatureChart.types";

const London = {
	"coord": {
		"lon": -0.1257,
		"lat": 51.5085
	},
	"weather": [
		{
			"id": 804,
			"main": "Clouds",
			"description": "overcast clouds",
			"icon": "04d"
		}
	],
	"base": "stations",
	"main": {
		"temp": 3.16,
		"feels_like": -0.47,
		"temp_min": 1.49,
		"temp_max": 4.34,
		"pressure": 1012,
		"humidity": 84
	},
	"visibility": 10000,
	"wind": {
		"speed": 4.12,
		"deg": 230
	},
	"clouds": {
		"all": 100
	},
	"dt": 1677228601,
	"sys": {
		"type": 2,
		"id": 2075535,
		"country": "GB",
		"sunrise": 1677221845,
		"sunset": 1677259830
	},
	"timezone": 0,
	"id": 2643743,
	"name": "London",
	"cod": 200
};

const data = {
	labels: ["London"],
	datasets: [
		{
			data: [London.main.temp]
		}
	]
};

const config = {
	backgroundColor: "#ffffff",
	backgroundGradientFrom: "#ffffff",
	backgroundGradientTo: "#ffffff",
	fillShadowGradient:"#000000",
	fillShadowGradientOpacity:1,
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
export const TemperatureChart: React.FC<TemperatureChartProps> = (props) => {
	return (
		props.isVisible
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
			null
	);
};
