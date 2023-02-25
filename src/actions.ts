export const INIT = "INIT";
export const TOGGLE = "TOGGLE";
export const SEARCH = "SEARCH";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILED = "SEARCH_FAILED";

export function init() {
	return {
		type: INIT
	};
}

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

export function searchSuccess(data: any) {
	return {
		type: SEARCH_SUCCESS,
		payload: data
	};
}

export function searchFailed(errorCode: { cod: string | undefined }) {
	return {
		type: "SEARCH_FAILED",
		payload: errorCode
	};
}


