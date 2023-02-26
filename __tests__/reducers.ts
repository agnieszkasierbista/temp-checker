import rootReducer, { initialTemperatureChartState } from "../src/reducers";
import {
	search,
	SEARCH,
	SEARCH_FAILED,
	SEARCH_SUCCESS,
	searchFailed,
	searchSuccess,
	toggle,
	TOGGLE
} from "../src/actions";
import { ResponseData } from "../src/types";

const initialState = {
	temperatureChart: initialTemperatureChartState
};

test(`${TOGGLE} action`, () => {
	expect(
		rootReducer(initialState, toggle())
	).toEqual({
		temperatureChart: {
			isCityFound: true,
			isSearching: false,
			searchedString: "",
			weatherData: null,
			isVisible: true
		}
	});
});

test(`${SEARCH} action`, () => {
	expect(
		rootReducer(initialState, search("Warsaw"))
	).toEqual({
		temperatureChart: {
			isCityFound: false,
			isSearching: true,
			searchedString: "Warsaw",
			weatherData: null,
			isVisible: false
		}
	});
});

test(`${SEARCH_SUCCESS} action`, () => {
	const responseData: ResponseData = {
		base: "",
		clouds: { all: 0 },
		cod: 200,
		coord: { lat: 0, lon: 0 },
		dt: 0,
		id: 0,
		main: { feels_like: 0, grnd_level: 0, humidity: 0, pressure: 0, sea_level: 0, temp: 0, temp_max: 0, temp_min: 0 },
		name: "",
		rain: { "1h": 1 },
		sys: { country: "", id: 0, sunrise: 0, sunset: 0, type: 0 },
		timezone: 0,
		visibility: 0,
		weather: [{ description: "", icon: "", id: 0, main: "" }],
		wind: { deg: 0, gust: 0, speed: 0 }
	};

	expect(
		rootReducer(initialState, searchSuccess(responseData))
	).toEqual({
		temperatureChart: {
			isCityFound: true,
			isSearching: false,
			searchedString: "",
			weatherData: responseData,
			isVisible: true
		}
	});
});

test(`${SEARCH_FAILED} action`, () => {
	expect(
		rootReducer(initialState, searchFailed())
	).toEqual({
		temperatureChart: {
			isCityFound: false,
			isSearching: false,
			searchedString: "",
			weatherData: null,
			isVisible: true
		}
	});
});
