import { connect } from "react-redux";
import { State } from "../../store";
import { TemperatureChart } from "./TemperatureChart.layout";

function mapStateToProps(state: State) {
	return {
		isVisible: state.temperatureChart.isVisible
	};
}

export default connect(mapStateToProps, null)(TemperatureChart);
