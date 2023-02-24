import { combineEpics, Epic, ofType } from "redux-observable";
import { EMPTY, of, switchMap } from "rxjs";
import { SEARCH, searchSuccess } from "./actions";

export const onInit: Epic = action$ => action$.pipe(
	ofType("INIT"),
	switchMap(() => {
		console.log("INIT");
		return EMPTY;
	})
);

export const onSearch: Epic = action$ => action$.pipe(
	ofType(SEARCH),
	switchMap((action) => {

		const data = action.payload === "London" ?
			{
				"coord": {
					"lon": -0.1257,
					"lat": 51.5085
				},
				"weather": [
					{
						"id": 804,
						"main": "Clouds",
						"description": "overcast clouds",
						"icon": "04d"
					}
				],
				"base": "stations",
				"main": {
					"temp": 3.16,
					"feels_like": -0.47,
					"temp_min": 1.49,
					"temp_max": 4.34,
					"pressure": 1012,
					"humidity": 84
				},
				"visibility": 10000,
				"wind": {
					"speed": 4.12,
					"deg": 230
				},
				"clouds": {
					"all": 100
				},
				"dt": 1677228601,
				"sys": {
					"type": 2,
					"id": 2075535,
					"country": "GB",
					"sunrise": 1677221845,
					"sunset": 1677259830
				},
				"timezone": 0,
				"id": 2643743,
				"name": "London",
				"cod": 200

			}
			:
			{
				"cod": "404",
				"message": "city not found"
			};



		return of(searchSuccess(data));
	})
);

export const rootEpic: Epic = combineEpics(
	onInit,
	onSearch
);

