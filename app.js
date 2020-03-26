const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const port = 3200;
app.listen(port);
console.log(`Server is running on http://localhost:${port}`);

