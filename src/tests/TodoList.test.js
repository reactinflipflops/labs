import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { TodoList } from '../TodoList';

const items = [{
  text: 'Get to Las Palmas 🌴',
  checked: true,
}, {
  text: 'Learn the basics of React 👩‍🎓',
  checked: false,
}, {
  text: 'Go surfing 🏄',
  checked: false,
}];

it('should render the items from the Redux state', () => {
	const tree = toJson(shallow(<TodoList items={items} />));
	expect(tree).toMatchSnapshot();
});

it('should set the value of the TodoInput from the Redux state', () => {
	const component = shallow(<TodoList items={[]} inputValue="Test value" />);
	expect(toJson(component)).toMatchSnapshot();
});

it('should dispatch the edit input action when new text is entered', () => {
  const dispatch = jest.fn();
	const component = shallow(<TodoList items={[]} dispatch={dispatch} />);
  component.find('TodoInput').simulate('change', { target: { value: 'Changed input' }});
  expect(dispatch).toHaveBeenCalledWith({
    type: 'EDIT_INPUT',
    text: 'Changed input'
  });
});

it('should dispatch the add item action when an item is added', () => {
  const dispatch = jest.fn();
	const component = shallow(<TodoList items={[]} dispatch={dispatch} />);
  const preventDefault = jest.fn();
  component.find('form').simulate('submit', { preventDefault });
  expect(preventDefault).toBeCalled();
  expect(dispatch).toHaveBeenCalledWith({
    type: 'ADD_ITEM'
  });
});

it('should dispatch the check item action when an item is clicked', () => {
  const dispatch = jest.fn();
	const component = mount(<TodoList items={items} dispatch={dispatch} />);
  const preventDefault = jest.fn();
  component.find('input').at(0).simulate('change');
  expect(dispatch).toHaveBeenCalledWith({
    type: 'CHECK_ITEM',
    text: 'Get to Las Palmas 🌴'
  });
});
