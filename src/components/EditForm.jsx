import React from 'react';
import { FcCancel } from 'react-icons/fc';
import { GrUpdate } from 'react-icons/gr';

export default function EditForm({
	currentTodo,
	setIsEditing,
	onEditInputChange,
	onEditFormSubmit,
}) {
	return (
		<form onSubmit={onEditFormSubmit}>
			<h2>Edit Todo</h2>
			<label htmlFor='updateTodo'>Update todo: </label>
			<input
				name='updateTodo'
				type='text'
				placeholder='Update todo'
				value={currentTodo.text}
				onChange={onEditInputChange}
			/>
			<GrUpdate title='Update' type='submit' onClick={onEditFormSubmit} />
			<FcCancel title='Cancel' onClick={() => setIsEditing(false)} />
		</form>
	);
}
