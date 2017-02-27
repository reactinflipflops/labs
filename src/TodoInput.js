/**
 * DON'T CHANGE THIS FILE
 */
import React from 'react';

const TodoInput = (props) => {
	return (
		<input type="text" value={props.value} onChange={props.onChange} />
	)
}

export default TodoInput;
