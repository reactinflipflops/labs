import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoList from './TodoList';
import mainReducer from './reducer';

const store = createStore(mainReducer);

const App = () => {
	return (
    <Provider store={store}>
		  <TodoList />
    </Provider>
	)
}

export default App;
