import { ResponseData } from "./types";

export const TOGGLE = "TOGGLE";
export const SEARCH = "SEARCH";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILED = "SEARCH_FAILED";

export function toggle() {
	return {
		type: TOGGLE
	};
}

export function search(userInput: string) {
	return {
		type: SEARCH,
		payload: userInput
	};
}

export function searchSuccess(data: ResponseData) {
	return {
		type: SEARCH_SUCCESS,
		payload: data
	};
}

export function searchFailed() {
	return {
		type: SEARCH_FAILED
	};
}


