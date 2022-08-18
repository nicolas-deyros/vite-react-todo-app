import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { IconContext } from 'react-icons';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<IconContext.Provider
			value={{ color: 'white', size: '1.5rem', className: 'global-class-name' }}>
			<App />
		</IconContext.Provider>
	</React.StrictMode>
);
