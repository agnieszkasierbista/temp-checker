import { combineEpics, Epic, ofType } from "redux-observable";
import { catchError, EMPTY, from, map, of, switchMap } from "rxjs";
import { SEARCH, searchFailed, searchSuccess } from "./actions";
import axios, { AxiosError } from "axios";

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
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=bad46dfee1ae1125ec4faf31e63449de&units=metric`;

		return from(axios.get(url)).pipe(
			map((response) => {
				return searchSuccess(response.data);
			}),
			catchError((e: AxiosError<{ cod: string, message: string }>) => {
				return of(searchFailed({ cod: e.response?.data?.cod }));
			})
		);
	})
);

export const rootEpic: Epic = combineEpics(
	onInit,
	onSearch
);

