const fs = require('fs');
const csv = require('csv-parser');
const {sanitizeCSVData, groupByProjectID, processEmployeeData} = require('../utils/csvUtils');

const processCSVFile = (filepath) => {
	return new Promise((resolve, reject) => {
		const groupedData = {};
		const fileStream = fs.createReadStream(filepath);

		fileStream
			.pipe(csv())
			.on('data', (data) => {
				const cleanData = sanitizeCSVData(data);
				groupByProjectID(cleanData, groupedData);
			})
			.on('end', () => {
				resolve(processEmployeeData(groupedData));
			})
			.on('error', reject);
	});
};

module.exports = {processCSVFile};