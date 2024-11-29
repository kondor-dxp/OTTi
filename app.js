const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CONFIGURAZIONE CARTELLA "public" PER I FILE STATICI
app.use(express.static(path.join(__dirname, 'public')));

// DEFINIZIONE DELLE ROUTES
const router = require('./routes/router');
app.use('/', router);

// GESTIONE DEGLI ERRORI
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal server error');
});

// AVVIO SERVER SU PORTA SPECIFICATA
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});