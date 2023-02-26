import React from "react";
import {AppRegistry} from "react-native";
import App from "./src/components/App/App";
import {name as appName} from "./app.json";
import { store } from "./src/store";
import { Provider } from "react-redux";

const AppWithStore = () => (
	<Provider store = { store }>
		<App />
	</Provider>
);

AppRegistry.registerComponent(appName, () => AppWithStore);
