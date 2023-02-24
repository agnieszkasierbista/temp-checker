import { AnyAction, combineReducers, Reducer } from "@reduxjs/toolkit";
import { INIT, TOGGLE } from "./actions";

const temperatureChartReducer: Reducer = (state = {}, action: AnyAction) => {
	switch (action.type) {

	case INIT: {
		return {
			...state,
			isVisible: false
		};
	}

	case TOGGLE: {
		return {
			...state,
			isVisible: !state.isVisible
		};
	}

	default:
		return state;
	}


};

const rootReducer = combineReducers({
	temperatureChart: temperatureChartReducer
});

export default rootReducer;
