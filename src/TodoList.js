/**
 * This component should manage the todo items, letting users check existing ones and add new ones
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import {
	checkItem,
	addItem,
	editInput,
} from './actions';

class TodoList extends Component {
	// Check an item
	checkItem = (text) => {
		this.props.dispatch(checkItem(text));
	}

	// Add an item
	addItem = (evt) => {
		evt.preventDefault();
		this.props.dispatch(addItem());
	}

	// Edit the input
	editInput = (evt) => {
		this.props.dispatch(editInput(evt.target.value));
	}

	render() {
		return (
			<div>
				<ul>
					{this.props.items.map((item, index) => (
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
						value={this.props.value}
					/>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		items: state.items,
		inputValue: state.inputValue,
	};
};

export default connect(mapStateToProps)(TodoList);
