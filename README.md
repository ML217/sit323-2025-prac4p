# sit323-2025-prac4p
## Use of technology
- Node.js
- Express.js
- GitHub
- Visual Studio Code

## Create the folder for Node.js project
### Open the terminal

Make a new Node.js project
```bash
mkdir 3234P

### Install the Express framework

```bash
npm install express
```


## Designing and Implementing API Endpoints

### Creating the main 4P.js file
In 4P.js, i have written following code:
```javascript
const express = require('express');
const app= express();
const port = 3000;
app.use(express.json());

//Number validation
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
```

### Run this microservice
At last i written following code in terminal
```bash
node 4P.js
```

if the running is successed, you will see the following output in the terminal:
The microservice is running at http://localhost:3000

Now the interface could be accessed through the browser, here are some testing codes:

- http://localhost:3000/add?num1=2&num2=3
- http://localhost:3000/minus?num1=10&num2=2
- http://localhost:3000/multiply?num1=2&num2=6
- http://localhost:3000/divide?num1=1&num2=0
