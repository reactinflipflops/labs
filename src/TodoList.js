/**
 * Connect this component to the Redux state for the items and the input value
 */
import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

class TodoList extends Component {
	state = {
		items: this.props.items,
		inputValue: '',
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
				text: this.state.inputValue,
				checked: false,
			}]),
		});
	}

	// Edit the input
	editInput = (evt) => {
		this.setState({
			inputValue: evt.target.value,
		})
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
