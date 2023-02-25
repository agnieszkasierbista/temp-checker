import { SearchButton } from "./SearchButton.layout";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { search } from "../../actions";
import { State } from "../../store";

function mapStateToProps(state: State) {
	return {
		isSearching: state.temperatureChart.isSearching
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		dispatchSearch: (userInput: string) => dispatch(search(userInput))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
