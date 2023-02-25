import { connect } from "react-redux";
import { State } from "../../store";
import { TemperatureChart } from "./TemperatureChart.layout";

function mapStateToProps(state: State) {
	return {
		isVisible: state.temperatureChart.isVisible,
		isCityFound: state.temperatureChart.isCityFound,
		weatherData: state.temperatureChart.weatherData,
		searchedString: state.temperatureChart.searchedString
	};
}

export default connect(mapStateToProps, null)(TemperatureChart);
