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
## Run this microservice
```bash
node 4P.js
```

## Designing and Implementing API Endpoints

### Creating the main 4P.js file
In 4P.js, i have written following code:
```javascript
const express = require('express');
const app = express();
const port = 3000;

// Addition
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Missing parameter num1 or num2' });
    }
    const result = parseFloat(num1) + parseFloat(num2);
    if (isNaN(result)) {
        return res.status(400).json({ error: 'The parameters num1 and num2 must be number' });
    }
    res.json({ result });
});

// Subduction
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Missing parameter num1 or num2' });
    }
    const result = parseFloat(num1) - parseFloat(num2);
    if (isNaN(result)) {
        return res.status(400).json({ error: 'The parameters num1 and num2 must be number' });
    }
    res.json({ result });
});

// Multiplication
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Missing parameter num1 or num2' });
    }
    const result = parseFloat(num1) * parseFloat(num2);
    if (isNaN(result)) {
        return res.status(400).json({ error: 'The parameters num1 and num2 must be number' });
    }
    res.json({ result });
});

// Division
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Missing parameter num1 or num2' });
    }
    const divisor = parseFloat(num2);
    if (divisor === 0) {
        return res.status(400).json({ error: 'num2 cannot be zero' });
    }
    const result = parseFloat(num1) / divisor;
    if (isNaN(result)) {
        return res.status(400).json({ error: 'The parameters num1 and num2 must be number' });
    }
    res.json({ result });
});

// Start the server
app.listen(port, () => {
    console.log(`The calculator microservice runs on: http://localhost:${port}`);
});
```

### Running Microservices

In the project root directory, start the microservice using the following command:

```bash
node app.js
```

After successfully running, you will see the following output in the terminal:
The calculator microservice runs on: http://localhost:3000

At this point the interface can be accessed in a browser, for example:

- http://localhost:3000/add?num1=12&num2=6
- http://localhost:3000/subtract?num1=16&num2=9
- http://localhost:3000/multiply?num1=3&num2=18
- http://localhost:3000/divide?num1=36&num2=6
