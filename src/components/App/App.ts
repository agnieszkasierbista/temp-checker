import { connect } from "react-redux";
import { Dispatch } from "redux";
import { App } from "./App.layout";
import { init } from "../../actions";

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		dispatchInit: () => {
			dispatch(init());
		}
	};
}

export default connect(null, mapDispatchToProps)(App);
