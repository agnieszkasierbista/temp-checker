import { SearchButton } from "./SearchButton.layout";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { search } from "../../actions";

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		dispatchSearch: (userInput: string) => dispatch(search(userInput))
	};
}

export default connect(null, mapDispatchToProps)(SearchButton);
