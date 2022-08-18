import React, { useEffect, useRef } from 'react';

export default function AddTodoForm({ todo, onAddFormSubmit, onAddInputChange }) {
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	});
	return (
		<form onSubmit={onAddFormSubmit}>
			<h2>Add Todo</h2>
			<input
				name='todo'
				type='text'
				placeholder='Create new todo'
				maxLength={55}
				ref={inputRef}
				value={todo}
				onChange={onAddInputChange}
			/>
		</form>
	);
}
