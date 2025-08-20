import { useState, useRef } from 'react';
import { UPLOAD_URL, FILE_SELECT_ERROR, FILE_UPLOAD_ERROR } from '../util/constants';

function FileFormComponent({ setData }) {
	const [file, setFile] = useState(null);
	const fileInputRef = useRef(null);

	const handleFileChange = (e) => {
		//[0] as there is always 1 file
		setFile(e.target.files[0]);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!file) return alert(FILE_SELECT_ERROR);

		//handles multipart/form-data header
		const formData = new FormData();
		formData.append('file', file);

		try {
			const response = await fetch(UPLOAD_URL, {
				method: 'POST',
				body: formData
			});

			const responseJson = await response.json();

			if (response.ok) {
				setData(responseJson.data);
			} else {
				alert(responseJson.message || FILE_UPLOAD_ERROR);
			}
		} catch (err) {
			console.error(err);
			alert(FILE_UPLOAD_ERROR);
		}

		//reset file input so that another file can be uploaded
		fileInputRef.current.value = null;
		setFile(null);
	};

	return (
		<form onSubmit={handleSubmit} className="upload-form">
			<input type="file" accept=".csv" onChange={handleFileChange} ref={fileInputRef}/>
			<button type="submit">Upload</button>
		</form>
	)
}

export default FileFormComponent;