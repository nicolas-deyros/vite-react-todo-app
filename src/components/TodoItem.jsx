import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { motion } from 'framer-motion';

export default function TodoItem({ todo, onEditClick, onDeleteClick }) {
	return (
		<motion.li
			key={todo.id}
			className='todo__list__item'
			initial={{ y: -100 }}
			animate={{ y: -10 }}
			exit={{ y: -100 }}
			whileHover={{ scale: 1.3 }}
			whileTap={{ scale: 1.3 }}
			tansition={{ type: 'spring', stiffness: 200 }}>
			<div className='todo__description' onClick={() => onEditClick(todo)}>
				{todo.text}
			</div>
			<div className='todo__actions'>
				<TiEdit title='edit' onClick={() => onEditClick(todo)} />
				<RiCloseCircleLine title='delete' onClick={() => onDeleteClick(todo.id)} />
			</div>
		</motion.li>
	);
}
