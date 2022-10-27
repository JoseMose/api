const express = require('express');
const cors = require('cors');
const app = express()
const greet = require('./routes/greet')

app.use(express.json())
app.use(cors())
app.use('/greet', greet)
app.get('/', (req, res) => {
	res.json('Welcome to the API');
});

const port = process.env.Port || 5500;
app.listen(port, () => console.log(`Listening on Port: ${port}`));
