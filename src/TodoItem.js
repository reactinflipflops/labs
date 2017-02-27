/**
 * DON'T CHANGE THIS FILE
 */
import React, { Component } from 'react';

class TodoItem extends Component {
	onClick = () => {
		this.props.onClick(this.props.text);
	}

	render() {
		return (
			<label>
				<input type="checkbox" checked={this.props.checked} onChange={this.onClick} />
				{this.props.text}
			</label>
		)
	}
}

export default TodoItem;
