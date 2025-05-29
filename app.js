const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files from the public folder
app.use(express.static('public'));

// Route for Home Page
app.get('/', (req, res) => {
    res.render('index');
});

// Route for Skills Page
app.get('/skills', (req, res) => {
    res.render('skills');
});

// Start the server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
