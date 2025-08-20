const { processCSVFile } = require('../services/uploadService');

const handleUpload = async (req, res) => {
	try {
		const file = req.files.file[0];
		const result = await processCSVFile(file.filepath);

		res.status(200).json({
			message: 'File processed successfully.',
			data: result,
		});
	} catch (error) {
		console.error('Error processing file:', error);
		res.status(500).json({ message: 'Error processing file.', error: error.message });
	}
};

module.exports = {handleUpload};
