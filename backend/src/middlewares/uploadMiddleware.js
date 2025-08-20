const formidable = require('formidable');

const parseAndValidateCSV = (req, res, next) => {
	console.log('File upload request', new Date());

	const form = new formidable.IncomingForm({ multiples: false });

	form.parse(req, (err, fields, files) => {
		if (err) {
			console.error('Form parsing error:', err);
			return res.status(500).json({ message: 'Error parsing form data.' });
		}

		const file = files?.file?.[0];

		if (!file || file.mimetype !== 'text/csv') {
			return res.status(400).json({ message: 'Invalid file type. Please upload a CSV file.' });
		}

		req.files = files;
		next();
	});
};

module.exports = {parseAndValidateCSV};