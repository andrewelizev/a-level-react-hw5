import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Films from './components/Films/Films'
import ToDo from "./components/ToDo/ToDo";
import TableToDos from './components/ToDo/TableToDos/TableToDos'

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="films" element={<Films />} />
					<Route path="todo" element={<ToDo />} >
						<Route path='home' element={<TableToDos task='Byu socks' time='on week' />} />
						<Route path='work' element={<TableToDos task='Make presentation' time='for an hour' />} />
						<Route path='need' element={<TableToDos task='Make a plan' time='28.12.2021' />} />
					</Route>
				</Route>
			</Routes>
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);