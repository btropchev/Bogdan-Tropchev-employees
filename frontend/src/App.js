import './App.css';
import { useState } from 'react';
import DataGridComponent from './components/DataGridComponent';
import FileFormComponent from './components/FileFormComponent';

function App() {
	const [data, setData] = useState([]);

	return (
		<div className="container">
			<FileFormComponent setData={setData} />
			<DataGridComponent data={data} />
		</div>
	);
}

export default App;
