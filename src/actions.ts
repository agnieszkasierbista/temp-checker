export const INIT = "INIT";
export const TOGGLE = "TOGGLE";
export const SEARCH = "SEARCH";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";


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
