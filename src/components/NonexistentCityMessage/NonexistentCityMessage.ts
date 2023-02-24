import { connect } from "react-redux";
import { State } from "../../store";
import { NonexistentCityMessage } from "./NonexistentCityMessage.layout";

function mapStateToProps(state: State) {
	return {
		searchedString: state.temperatureChart.searchedString
	};
}

export default connect(mapStateToProps, null)(NonexistentCityMessage);
