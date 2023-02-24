import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface AppProps {
  dispatchInit: () => void
}

const App: React.FC<AppProps> = ({ dispatchInit }) => {

	React.useEffect(() => {
		dispatchInit();
	}, []);

	return (
		<SafeAreaView>
			<StatusBar />
			<ScrollView>
				<Text>
          Hello world!
				</Text>
			</ScrollView>
		</SafeAreaView>
	);
};

export default connect(null, (dispatch: Dispatch) => {
	return {
		dispatchInit: () => {
			dispatch({ type: "INIT" });
		}
	};
})(App);
