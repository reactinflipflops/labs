import {
	checkItem,
	addItem,
	editInput
} from '../actions';

describe('checkItem', () => {
	it('should have a type of "CHECK_ITEM"', () => {
		expect(checkItem()).toMatchSnapshot();
	})

	it('should pass on the text passed to it as the first argument', () => {
		expect(checkItem('Some text')).toMatchSnapshot();
	})
})

describe('addItem', () => {
	it('should have a type of "ADD_ITEM"', () => {
		expect(addItem()).toMatchSnapshot();
	})
})

describe('editInput', () => {
	it('should have a type of "EDIT_INPUT"', () => {
		expect(editInput()).toMatchSnapshot();
	})

	it('should pass on the text passed to it as the first argument', () => {
		expect(editInput('Some text')).toMatchSnapshot();
	})
})
