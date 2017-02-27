// The todo items
const initialState = {
	items: [{
	  text: 'Get to Las Palmas 🌴',
	  checked: true,
	}, {
	  text: 'Learn the basics of React 👩‍🎓',
	  checked: false,
	}, {
	  text: 'Go surfing 🏄',
	  checked: false,
	}],
	inputValue: '',
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CHECK_ITEM':
			return {
				...state,
				items: state.items.map(item => {
					if (item.text !== action.text) return item;

					return {
						...item,
						checked: !item.checked,
					};
				}),
			};
		case 'ADD_ITEM':
			return {
				items: state.items.concat([{
					text: state.inputValue,
					checked: false,
				}]),
				inputValue: '',
			};
		case 'EDIT_INPUT':
			return {
				...state,
				inputValue: action.text,
			};
		default:
			return state;
	}
}

export default reducer;
