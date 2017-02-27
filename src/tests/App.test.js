import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../App';

it('should render the react-redux Provider with a store and the TodoList', () => {
	const tree = toJson(shallow(<App />));
	expect(tree).toMatchSnapshot();
});
