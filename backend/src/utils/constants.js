const SERVER_PORT = 5000;
const UPLOAD_FILE_ERROR = 'Error uploading file';
const VALIDATION_FILE_ERROR = 'Please upload a valid CSV file.';
const PROCESSING_FILE_ERROR = 'Error processing CSV file';
const SUCCESS_MESSAGE = 'File uploaded and processed successfully';
const DATE_FORMATS = [
	'yyyy-MM-dd',
	'MM/dd/yyyy',
	'dd-MM-yyyy',
	'yyyy/MM/dd',
	'MMM dd, yyyy',
	'MMMM d, yyyy',
	'd MMM yyyy'
];
const DEFAULT_DATE_FORMAT = 'yyyy-MM-dd';
const DAY_IN_MS = 1000 * 3600 * 24;


module.exports = {
	SERVER_PORT,
	UPLOAD_FILE_ERROR,
	VALIDATION_FILE_ERROR,
	PROCESSING_FILE_ERROR,
	SUCCESS_MESSAGE,
	DATE_FORMATS,
	DEFAULT_DATE_FORMAT,
	DAY_IN_MS
};