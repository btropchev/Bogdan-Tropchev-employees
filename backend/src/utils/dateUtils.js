const { parse, isValid, format } = require('date-fns');
const {DATE_FORMATS, DEFAULT_DATE_FORMAT, DAY_IN_MS} = require('./constants');

/**
 * Normalize date string to a standard format.
 * @param {*} dateString
 * @returns
 */
function normalizeDate(dateString) {
	if (dateString === 'NULL') {
		return format(new Date(), DEFAULT_DATE_FORMAT);
	}

	for (const dateFormat of DATE_FORMATS) {
		const parsed = parse(dateString, dateFormat, new Date());

		if (isValid(parsed)) {
			return format(parsed, DEFAULT_DATE_FORMAT);
		}
	}

	return null;
}

/**
 * Get the number of overlapping days between two date ranges.
 * @param {*} start1
 * @param {*} end1
 * @param {*} start2
 * @param {*} end2
 * @returns
 */
const getOverlapDays = (start1, end1, start2, end2) => {
	const start = new Date(Math.max(new Date(start1).getTime(), new Date(start2).getTime()));
	const end = new Date(Math.min(new Date(end1).getTime(), new Date(end2).getTime()));
	const diff = (end - start) / DAY_IN_MS;

	//console.log(`Calc overlap days: ${start1} - ${end1} with ${start2} - ${end2}, result: ${diff}`);

	return diff > 0 ? Math.ceil(diff) : 0;
};

module.exports = {
	normalizeDate,
	getOverlapDays,
};