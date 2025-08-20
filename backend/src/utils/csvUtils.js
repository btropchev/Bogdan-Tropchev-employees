const {normalizeDate, getOverlapDays} = require('./dateUtils');

/**
 * Sanitize CSV data by trimming whitespace and normalizing date formats.
 * @param {object} data
 * @returns {object}
 */
const sanitizeCSVData = (data) => {
	const cleanedData = {};

	for (const key in data) {
		const trimmedKey = key.trim();
		let trimmedValue = data[key].trim();

		if (trimmedKey === 'DateFrom' || trimmedKey === 'DateTo') {
			trimmedValue = normalizeDate(trimmedValue);
		}

		cleanedData[trimmedKey] = trimmedValue;
	}
	return cleanedData;
}

/**
 * Group CSV data by ProjectID.
 * @param {*} data
 * @returns {object}
 */
const groupByProjectID = (data, groupedData = {}) => {
	const projectId = data['ProjectID'];

	if (!groupedData[projectId]) {
		groupedData[projectId] = [];
	}

	//console.log(`Group data by ProjectID: ${projectId}, row: ${JSON.stringify(data)}`);

	groupedData[projectId].push(data);

	return groupedData;
}

/**
 * Process employee data by grouping and transforming it.
 * @param {*} groupedData
 * @returns {array}
 */
const processEmployeeData = (groupedData) => {
	const result = [];

	Object.entries(groupedData).forEach(([projectID, employees]) => {
		for (let i = 0; i < employees.length; i++) {
			//for each employee, loop through the rest of the employees
			for (let j = i + 1; j < employees.length; j++) {
				const emp1 = employees[i];
				const emp2 = employees[j];

				const overlapDays = getOverlapDays(emp1['DateFrom'], emp1['DateTo'], emp2['DateFrom'], emp2['DateTo']);

				if (overlapDays > 0) {
					result.push({
						'EmpID1': emp1['EmpID'],
						'EmpID2': emp2['EmpID'],
						'ProjectID': projectID,
						'DaysWorkedTogether': overlapDays
					});
				}
			}
		}
	});

	//console.log(`Processed employee data: ${JSON.stringify(result)}`);

	return result;
}

module.exports = {
	sanitizeCSVData,
	groupByProjectID,
	processEmployeeData
};