import { combineEpics, Epic, ofType } from "redux-observable";
import { catchError, delay, EMPTY, from, map, of, switchMap } from "rxjs";
import { SEARCH, searchFailed, searchSuccess } from "./actions";
import axios, { AxiosResponse } from "axios";
import { ResponseData } from "./types";

export const onInit: Epic = action$ => action$.pipe(
	ofType("INIT"),
	switchMap(() => {
		console.log("INIT");
		return EMPTY;
	})
);

export const onSearch: Epic = action$ => action$.pipe(
	ofType(SEARCH),
	delay(1000),
	switchMap((action) => {
		if (action.payload) {
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=bad46dfee1ae1125ec4faf31e63449de&units=metric`;

			return from(axios.get(url)).pipe(
				map((response: AxiosResponse<ResponseData>) => {
					return searchSuccess(response.data);
				}),
				catchError(() => {
					return of(searchFailed());
				})
			);
		} else {
			return of(searchFailed());
		}
	})
);

export const rootEpic: Epic = combineEpics(
	onInit,
	onSearch
);

