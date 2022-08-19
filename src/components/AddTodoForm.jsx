import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AddTodoForm({ todo, onAddFormSubmit, onAddInputChange }) {
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	});
	return (
		<form onSubmit={onAddFormSubmit}>
			<motion.h2
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				tansition={{ delay: 1.5, duration: 1.5 }}
				className='form__title'>
				Add Todo
			</motion.h2>
			<input
				className='form__input'
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
