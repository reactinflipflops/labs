import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

// The todo items
const items = [{
  text: 'Get to the workshop 🚶‍♀️',
  checked: true,
}, {
  text: 'Learn the basics of React 👩‍🎓',
  checked: false,
}, {
  text: 'Write some apps 💻',
  checked: false,
}]

ReactDOM.render(
  <TodoList items={items} />,
  document.getElementById('root')
);
