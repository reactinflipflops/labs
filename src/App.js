import React from 'react';
import TodoList from './TodoList';

// The todo items
const items = [{
  text: 'Get to Las Palmas 🌴',
  checked: true,
}, {
  text: 'Learn the basics of React 👩‍🎓',
  checked: false,
}, {
  text: 'Go surfing 🏄',
  checked: false,
}]

const App = () => {
	return (
		<TodoList items={items} />
	)
}

export default App;
