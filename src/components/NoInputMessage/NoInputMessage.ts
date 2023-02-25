import { connect } from "react-redux";
import { State } from "../../store";
import { NoInputMessage } from "./NoInputMessage.layout";

function mapStateToProps(state: State) {
	return {
		searchedString: state.temperatureChart.searchedString
	};
}

export default connect(mapStateToProps, null)(NoInputMessage);
