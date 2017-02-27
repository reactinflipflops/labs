export const checkItem = (text) => {
	return {
		type: 'CHECK_ITEM',
		text,
	};
};

export const addItem = () => {
	return {
		type: 'ADD_ITEM',
	};
};

export const editInput = (text) => {
	return {
		type: 'EDIT_INPUT',
		text,
	};
}
