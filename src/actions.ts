import { ResponseData } from "./types";

export const TOGGLE = "TOGGLE";
export const SEARCH = "SEARCH";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILED = "SEARCH_FAILED";

type ToggleAction = { type: typeof TOGGLE };
type SearchAction = { type: typeof SEARCH, payload: string };
type SearchSuccessAction = { type: typeof SEARCH_SUCCESS, payload: ResponseData }
type SearchFailedAction = { type: typeof SEARCH_FAILED };

export type TemperatureChartActions =
	ToggleAction
	| SearchAction
	| SearchSuccessAction
	| SearchFailedAction

export function toggle(): ToggleAction {
	return {
		type: TOGGLE
	};
}

export function search(userInput: string): SearchAction {
	return {
		type: SEARCH,
		payload: userInput
	};
}

export function searchSuccess(data: ResponseData): SearchSuccessAction {
	return {
		type: SEARCH_SUCCESS,
		payload: data
	};
}

export function searchFailed(): SearchFailedAction {
	return {
		type: SEARCH_FAILED
	};
}

