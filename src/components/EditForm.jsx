import React, { useEffect, useRef } from 'react';
import { MdCancel, MdCheckCircle } from 'react-icons/md';

export default function EditForm({
	currentTodo,
	setIsEditing,
	onEditInputChange,
	onEditFormSubmit,
}) {
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	});
	return (
		<form onSubmit={onEditFormSubmit}>
			<h2>Update Todo</h2>
			<div className='form__input'>
				<input
					name='updateTodo'
					type='text'
					placeholder='Update todo'
					maxLength={55}
					ref={inputRef}
					value={currentTodo.text}
					onChange={onEditInputChange}
				/>
				<MdCheckCircle title='Update' type='submit' onClick={onEditFormSubmit} />
				<MdCancel title='Cancel' onClick={() => setIsEditing(false)} />
			</div>
		</form>
	);
}
