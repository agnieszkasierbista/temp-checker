import rootReducer, { initialTemperatureChartState } from "../src/reducers";
import { init } from "../src/actions";

const initialState = {
	temperatureChart: initialTemperatureChartState
};

test("INIT action", () => {
	expect(rootReducer(initialState, init())).toEqual({
		temperatureChart: {
			isCityFound: false,
			isVisible: false
		}
	});
});
