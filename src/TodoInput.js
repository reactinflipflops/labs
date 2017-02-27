/**
 * This component should render a controlled input for text
 */
import React from 'react';

const TodoInput = (props) => {
	return (
		<input type="text" value={props.value} onChange={props.onChange} />
	)
}

export default TodoInput;
