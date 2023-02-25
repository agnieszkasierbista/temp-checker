import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { rootEpic } from "./epics";
import { createEpicMiddleware } from "redux-observable";
import { ResponseData } from "./types";

export interface State {
	temperatureChart: {
		isVisible: boolean,
		isCityFound: boolean
		data: ResponseData
		searchedString: string,
		isSearching: boolean
	}
}

const preloadedState = {
	temperatureChart: {isVisible: false, isSearching: false}
};

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(epicMiddleware),
	preloadedState
});

epicMiddleware.run(rootEpic);
