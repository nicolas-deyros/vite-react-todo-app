import React, { useEffect, useRef } from 'react';
import { MdCancel, MdCheckCircle } from 'react-icons/md';
import { motion } from 'framer-motion';

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
			<motion.h2
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				tansition={{ delay: 1.5, duration: 1.5 }}
				className='form__title'>
				Update Todo
			</motion.h2>
			<div className='form__input_container'>
				<input
					className='form__input'
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
