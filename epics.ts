import { combineEpics, Epic, ofType } from "redux-observable";
import { EMPTY, switchMap } from "rxjs";

export const onInit: Epic = action$ => action$.pipe(
	ofType("INIT"),
	switchMap(() => {
		console.log("INIT");
		return EMPTY;
	})
);

export const rootEpic: Epic = combineEpics(
	onInit
);

