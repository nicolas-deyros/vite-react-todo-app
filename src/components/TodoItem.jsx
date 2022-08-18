import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

export default function TodoItem({ todo, onEditClick, onDeleteClick }) {
	return (
		<li key={todo.id}>
			<div className='todo__description' onClick={() => onEditClick(todo)}>
				{todo.text}
			</div>
			<div className='todo__actions'>
				<TiEdit title='edit' onClick={() => onEditClick(todo)} />
				<RiCloseCircleLine title='delete' onClick={() => onDeleteClick(todo.id)} />
			</div>
		</li>
	);
}
