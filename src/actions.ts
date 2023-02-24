export const INIT = "INIT";
export const TOGGLE = "TOGGLE";

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
