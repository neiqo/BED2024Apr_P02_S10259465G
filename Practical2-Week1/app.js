const express = require('express')
const app = express()
const port = 3000


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use(express.static('public'))




