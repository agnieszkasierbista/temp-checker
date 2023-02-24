import { combineEpics, Epic, ofType } from "redux-observable";
import { EMPTY, of, switchMap } from "rxjs";
import { SEARCH, searchSuccess } from "./actions";
import axios from "axios";

export const onInit: Epic = action$ => action$.pipe(
  ofType("INIT"),
  switchMap(() => {
    console.log("INIT");
    return EMPTY;
  })
);

export const onSearch: Epic = action$ => action$.pipe(
  ofType(SEARCH), switchMap((action) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=bad46dfee1ae1125ec4faf31e63449de&units=metric`)
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }),
  switchMap((response) => {
    const data = response?.data;
    return of(searchSuccess(data));
  })
);

export const rootEpic: Epic = combineEpics(
  onInit,
  onSearch
);

