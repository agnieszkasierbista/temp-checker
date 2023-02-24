import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { rootEpic } from "./epics";
import { createEpicMiddleware } from "redux-observable";

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);
