import { useState } from 'react';

export const useInput = function (defaultValue, validationFn) {
	const [userInput, setUserInput] = useState(defaultValue);
	const [didEdit, setDidEdit] = useState(false);

	const isValueValid = validationFn(userInput);

	const handleInputChange = function (event) {
		setUserInput(event.target.value);
		setDidEdit(false);
	};

	const handleInputBlur = function () {
		setDidEdit(true);
	};

	return {
		value: userInput,
		handleInputChange,
		handleInputBlur,
		hasError: didEdit && !isValueValid,
	};
};
