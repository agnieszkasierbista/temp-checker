import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { SEARCH, SEARCH_FAILED, SEARCH_SUCCESS, TemperatureChartActions, TOGGLE } from "./actions";
import { ResponseData } from "./types";

interface TemperatureChartState {
  isVisible: boolean,
  isCityFound: boolean,
  searchedString: string,
  isSearching: boolean,
  weatherData: ResponseData | null
}

export const initialTemperatureChartState: TemperatureChartState = {
	weatherData: null,
	isCityFound: false,
	isSearching: false,
	isVisible: false,
	searchedString: ""
};

const temperatureChartReducer: Reducer<TemperatureChartState, TemperatureChartActions> = (state = initialTemperatureChartState, action) => {
	switch (action.type) {

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
			searchedString: action.payload,
			isVisible: false,
			isSearching: true
		};
	}

	case SEARCH_SUCCESS: {
		return {
			...state,
			isVisible: true,
			isCityFound: `${action.payload.cod}` === "200",
			weatherData: action.payload,
			isSearching: false
		};
	}

	case SEARCH_FAILED: {
		return {
			...state,
			isVisible: true,
			isCityFound: false,
			isSearching: false
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
