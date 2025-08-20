const express = require('express');
const cors = require('cors');

const uploadRoute = require('./routes/uploadRoute');
const {SERVER_PORT} = require('./utils/constants');

const app = express();

app.use(cors({
	origin: 'http://localhost:3000' //allow requests
}));

app.use('/', uploadRoute);

app.listen(SERVER_PORT, () => {
	console.log(`Server listening on port ${SERVER_PORT}`);
});