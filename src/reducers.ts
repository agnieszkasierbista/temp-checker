import { AnyAction, combineReducers, Reducer } from "@reduxjs/toolkit";
import { INIT, SEARCH, SEARCH_SUCCESS, TOGGLE } from "./actions";

const temperatureChartReducer: Reducer = (state = {}, action: AnyAction) => {
	switch (action.type) {

	case INIT: {
		return {
			...state,
			isVisible: false,
			isCityFound: false
		};
	}

	case TOGGLE: {
		return {
			...state,
			isVisible: !state.isVisible,
			isCityFound: !state.isCityFound
		};
	}

	case SEARCH: {
		return {
			...state,
			searchedString: action.payload
		};
	}

	case SEARCH_SUCCESS: {
		return {
			...state,
			isVisible: true,
			isCityFound: `${action.payload.cod}`  === "200",
			data: action.payload
		};
	}

	case "SEARCH_FAILED": {
		return {
			...state,
			isVisible: true,
			isCityFound: false,
			data: action.payload
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
