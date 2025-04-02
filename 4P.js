const express = require('express');
const app= express();
const port = 3000;

app.use(express.json());

// function for number validation
function isValidNumber(value) {
    return !isNaN(value) && typeof value === 'number';
}

// Add additional endpoints
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (!isValidNumber(num1) || !isValidNumber(num2)) {
        return res.status(400).json({ error: 'Provide valid number!' });
    }

    const result = num1 + num2;
    res.json({ result });
});

// minus endpoint
app.get('/minus', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (!isValidNumber(num1) || !isValidNumber(num2)) {
        return res.status(400).json({ error: 'Provide valid number!' });
    }

    const result = num1 - num2;
    res.json({ result });
});

// multiply endpoint
app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (!isValidNumber(num1) || !isValidNumber(num2)) {
        return res.status(400).json({ error: 'Provide valid number!' });
    }

    const result = num1 * num2;
    res.json({ result });
});

// divide endpoint
app.get('/divide', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (!isValidNumber(num1) || !isValidNumber(num2)) {
        return res.status(400).json({ error: 'Provide valid number!' });
    }

    if (num2 === 0) {
        return res.status(400).json({ error: 'Zero cannot be divided.' });
    }

    const result = num1 / num2;
    res.json({ result });
});

// make the server start
app.listen(port, () => {
    console.log(`This microservice running at http://localhost:${port}`);
});
