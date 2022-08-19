import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './components/TodoItem.jsx';
import AddTodoForm from './components/AddTodoForm.jsx';
import EditForm from './components/EditForm.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { motion } from 'framer-motion';
import './App.css';

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

	const handleAddInputChange = (e) => {
		setTodo(e.target.value);
	};

	const handleEditInputChange = (e) => {
		setCurrentTodo({ ...currentTodo, text: e.target.value });
		// console.log(currentTodo);
	};

	const handleAddFormSubmit = (e) => {
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
				theme: 'colored',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				draggablePercent: 60,
			});
		} catch (error) {
			toast.error(error, {
				position: 'bottom-center',
				theme: 'colored',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				draggablePercent: 60,
			});
		}
	};

	const handleEditFormSubmit = (e) => {
		try {
			e.preventDefault();
			handleUpdateTodo(currentTodo.id, currentTodo);
			toast.info('Task successfully updated', {
				position: 'bottom-center',
				theme: 'colored',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				draggablePercent: 60,
			});
		} catch (error) {
			toast.error(error, {
				position: 'bottom-center',
				theme: 'colored',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				draggablePercent: 60,
			});
		}
	};

	const handleDeleteClick = (id) => {
		try {
			const removeItem = todos.filter((todo) => {
				return todo.id !== id;
			});
			setTodos(removeItem);
			toast.warn('Task Deleted', {
				position: 'bottom-center',
				theme: 'colored',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				draggablePercent: 60,
			});
		} catch (error) {
			toast.error(error, {
				position: 'bottom-center',
				theme: 'colored',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				draggablePercent: 60,
			});
		}
	};

	const handleUpdateTodo = (id, updatedTodo) => {
		const updatedItem = todos.map((todo) => {
			return todo.id === id ? updatedTodo : todo;
		});
		setIsEditing(false);
		setTodos(updatedItem);
	};

	const handleEditClick = (todo) => {
		setIsEditing(true);
		setCurrentTodo({ ...todo });
	};

	return (
		<div className='App'>
			{todos.length > 0 && (
				<motion.h1
					initial={{ y: -100 }}
					animate={{ y: -10 }}
					tansition={{ delay: 1.5, duration: 1.5 }}
					className='counter'>
					Total # {todos.length}
				</motion.h1>
			)}
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
			<ul className='todo__list'>
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						onEditClick={handleEditClick}
						onDeleteClick={handleDeleteClick}
					/>
				))}
			</ul>
			<ToastContainer draggablePercent={60} limit={2} />
		</div>
	);
}
