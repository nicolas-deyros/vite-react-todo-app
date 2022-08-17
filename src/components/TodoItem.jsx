import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

export default function TodoItem({ todo, onEditClick, onDeleteClick }) {
	// console.log(todo.id);
	return (
		<li key={todo.id}>
			{todo.text}
			<TiEdit onClick={() => onEditClick(todo)} />
			<RiCloseCircleLine onClick={() => onDeleteClick(todo.id)} />
		</li>
	);
}
