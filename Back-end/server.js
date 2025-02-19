const express = require('express');
const cors = require('cors');

//express js server 
const app = express();
const PORT = 8000;
app.use(cors());
app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Hello, World!'); // Send 'Hello, World!' as the response
  });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});