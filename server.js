const express = require('express');
const app = express();

const routes = require('./routes');
const path = require('path');

const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes)

app.on('pronto', () => {
    app.listen(port, () => {
        console.log(`Ouvindo a porta ${port}`)
        console.log(`http://localhost:${port}`)
    })
})
