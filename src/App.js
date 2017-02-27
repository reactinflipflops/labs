/**
 * Set up redux store and react-redux Provider in this file
 */
import React from 'react';
import TodoList from './TodoList';

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

const App = () => {
	return (
		 <TodoList items={items} />
	)
}

export default App;
