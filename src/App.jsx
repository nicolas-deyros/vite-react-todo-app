import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './components/TodoItem.jsx';
import AddTodoForm from './components/AddTodoForm.jsx';
import EditForm from './components/EditForm.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './app.css';

export default function App() {
	const [todos, setTodos] = useState(() => {
		const savedTodos = localStorage.getItem('todos');
		if (savedTodos) {
			return JSON.parse(savedTodos);
		} else {
			return [];
		}
	});
	const [todo, setTodo] = useState('');
	const [isEditing, setIsEditing] = useState(false);
	const [currentTodo, setCurrentTodo] = useState({});

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	function handleAddInputChange(e) {
		setTodo(e.target.value);
	}

	function handleEditInputChange(e) {
		setCurrentTodo({ ...currentTodo, text: e.target.value });
		// console.log(currentTodo);
	}

	function handleAddFormSubmit(e) {
		try {
			e.preventDefault();

			if (todo !== '') {
				setTodos([
					...todos,
					{
						id: uuidv4(),
						text: todo.trim(),
					},
				]);
			}

			setTodo('');
			toast.success('Task successfully added', {
				position: 'bottom-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} catch (error) {
			toast.error(error, {
				position: 'bottom-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	}

	function handleEditFormSubmit(e) {
		try {
			e.preventDefault();
			handleUpdateTodo(currentTodo.id, currentTodo);
			toast.success('Task successfully updated', {
				position: 'bottom-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} catch (error) {
			toast.error(error, {
				position: 'bottom-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	}

	function handleDeleteClick(id) {
		try {
			const removeItem = todos.filter((todo) => {
				return todo.id !== id;
			});
			setTodos(removeItem);
			toast.warn('Task Deleted', {
				position: 'bottom-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} catch (error) {
			toast.error(error, {
				position: 'bottom-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	}

	function handleUpdateTodo(id, updatedTodo) {
		const updatedItem = todos.map((todo) => {
			return todo.id === id ? updatedTodo : todo;
		});
		setIsEditing(false);
		setTodos(updatedItem);
	}

	function handleEditClick(todo) {
		setIsEditing(true);
		setCurrentTodo({ ...todo });
	}

	return (
		<div className='App'>
			{isEditing ? (
				<EditForm
					currentTodo={currentTodo}
					setIsEditing={setIsEditing}
					onEditInputChange={handleEditInputChange}
					onEditFormSubmit={handleEditFormSubmit}
				/>
			) : (
				<AddTodoForm
					todo={todo}
					onAddInputChange={handleAddInputChange}
					onAddFormSubmit={handleAddFormSubmit}
				/>
			)}

			<ul className='todo-list'>
				{todos.map((todo) => (
					<TodoItem todo={todo} onEditClick={handleEditClick} onDeleteClick={handleDeleteClick} />
				))}
			</ul>
			<ToastContainer />
		</div>
	);
}
