import { useState, useDeferredValue } from "react";

const useDeferredState = (initialValue: any) => {
	const [value, setValue] = useState(initialValue);
	const deferredValue = useDeferredValue(value);

	return [deferredValue, setValue, value !== deferredValue];
};

export default useDeferredState;
