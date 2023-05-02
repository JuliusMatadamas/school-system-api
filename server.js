const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 2020

// Middleware
app.use(morgan("dev"));
// Server
app.listen(PORT, console.log(`Server listening on ${PORT}`));