const express = require('express'); 
const bodyParser = require('body-parser'); 
const mysql = require('mysql2');

const db = mysql.createConnection({ 
    host: 'localhost',
     user: 'root', // Użytkownik MySQL
     password: '', // Hasło MySQL
     database: 'form_database' // Nazwa bazy danych 
    });
    
    db.connect((err) => {
        if (err) {
        console.error('Nie udało się połączyć z bazą danych:', err); process.exit(1); 
       } 
       console.log('Połączono z bazą danych MySQL.');
        });
const app = express();
app.use(bodyParser.json()); 
app.use((req, res, next) => { 
res.setHeader('Access-Control-Allow-Origin', '*'); res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); 
next(); 
});

app.post('/submit', (req, res) => {
    const { name, surname, address } = req.body;
    if (!name || !surname || !address) {
        return res.status(400).send('Wszystkie pola są wymagane!');
    }
    const query = 'INSERT INTO users (name, surname, address) VALUES (?, ?, ?)';
    db.query(query, [name, surname, address], (err, result) => {
    if (err) {
        console.error('Błąd zapisu do bazy danych:', err);
        return res.status(500).send('Wystąpił błąd podczas zapisywania danych.');
        }
    res.send('Dane zostały zapisane pomyślnie!');
    });
    });

    const PORT = 3000;
 app.listen(PORT, () => {
 console.log(`Serwer działa na http://localhost:${PORT}`); });
