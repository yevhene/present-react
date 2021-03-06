const glob = require('glob');
const path = require('path');

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(expressLayouts);
app.set('layout', path.join(__dirname, 'layouts/layout'));

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => res.render('index'));

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`App is running on http://localhost:${port}`);
});
