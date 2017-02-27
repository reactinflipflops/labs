/**
 * This component should manage the todo items, letting users check existing ones and add new ones
 */
import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

class TodoList extends Component {
	// Initialise the state
	state = {
		items: this.props.items,
		value: '',
	}

	// Check an item
	checkItem = (text) => {
		this.setState({
			items: this.state.items.map(item => {
				if (item.text !== text) return item;

				return {
					...item,
					checked: !item.checked,
				};
			}),
		});
	}

	// Add an item
	addItem = (evt) => {
		evt.preventDefault();
		this.setState({
			items: this.state.items.concat([{
				text: this.state.value,
				checked: false
			}]),
			value: ''
		})
	}

	// Edit the input
	editInput = (evt) => {
		this.setState({
			value: evt.target.value,
		});
	}

	render() {
		return (
			<div>
				<ul>
					{this.state.items.map((item, index) => (
						<li key={index}>
							<TodoItem
								onClick={this.checkItem}
								text={item.text}
								checked={item.checked}
							/>
						</li>
					))}
				</ul>
				<form onSubmit={this.addItem}>
					<TodoInput
						onChange={this.editInput}
						value={this.state.value}
					/>
				</form>
			</div>
		)
	}
}

export default TodoList;
