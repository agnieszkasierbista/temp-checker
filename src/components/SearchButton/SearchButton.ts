import { SearchButton } from "./SearchButton.layout";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toggle } from "../../actions";

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		dispatchToggleVisibility: () => {
			dispatch(toggle());
		}
	};
}

export default connect(null, mapDispatchToProps)(SearchButton);
