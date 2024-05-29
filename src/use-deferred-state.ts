import { useState, useDeferredValue } from "react";

const useDeferredState = (initialValue: any) => {
	const [originalValue, setValue] = useState(initialValue);
	const value = useDeferredValue(originalValue);

	return [
		{ value, originalValue, isStale: originalValue !== value },
		setValue,
	];
};

export default useDeferredState;
