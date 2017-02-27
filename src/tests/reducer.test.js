import reducer from '../reducer';
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
};

it('should return the initial state when called without a state', () => {
	expect(reducer(undefined, {})).toMatchSnapshot();
})

it('should return the state when no action is passed', () => {
	const state = { items: [], inputValue: 'Something' };
	expect(reducer(state, {})).toMatchSnapshot()
})

it('should edit the inputValue in the state when the editInput action is dispatched', () => {
	expect(reducer(undefined, {
		type: 'EDIT_INPUT',
		text: 'New input value',
	})).toMatchSnapshot();
})

it('should check an item based on its text when the checkItem action is dispatched', () => {
	expect(reducer(undefined, {
		type: 'CHECK_ITEM',
		text: 'Learn the basics of React 👩‍🎓'
	})).toMatchSnapshot();
})

it('should add an item based on the inputValue in the Redux state when the addItem action is dispatched', () => {
	expect(reducer({
		...initialState,
		inputValue: 'New item',
	}, {
		type: 'ADD_ITEM'
	})).toMatchSnapshot();
})
