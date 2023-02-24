import { connect } from "react-redux";
import { State } from "../../store";
import { TemperatureChart } from "./TemperatureChart.layout";

function mapStateToProps(state: State) {
	return {
		isVisible: state.temperatureChart.isVisible,
		isCityFound: state.temperatureChart.isCityFound,
		data: state.temperatureChart.data,
		searchedString: state.temperatureChart.searchedString
	};
}

export default connect(mapStateToProps, null)(TemperatureChart);
