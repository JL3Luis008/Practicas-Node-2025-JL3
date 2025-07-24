
const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
app.use(express.json());

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'BookLibrary',
});

async function test(){
    const [result] = await connection.query('SELECT 1+1 AS result');
    console.log('Connection established', result[0].result); // Should print 2
app.post('/books', async (req, res) => {
    try {
        const [result] = await connection.query(`INSERT INTO Books (title, author) VALUES (?, ?), [req.body.title, req.body.author]`);
        res.status(201).json({ id: result.insertId, ...req.body });
    } catch (error) {
        res.status(500).json({ error: 'Error at trying to create a new book'});
    }
});
    res.status(500).json({ error: 'Error at trying to create a new book'});
    }



app.get('/books', async (req, res) => {
    try {
        const [result] = await connection.query('SELECT * FROM Books');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error at trying to get books' });
    }
});


app.put('/books/:id', async (req, res) => {
    try {
        const [result] = await connection.query(`UPDATE Books SET title = ?, author = ? WHERE id = ?, [req.body.title, req.body.author, req.params.id]`);
        res.status(200).json({id: req.params.id, ...req.body});
    } catch (err) {
        res.status(500).json({ error: 'Error at trying to update book'}); 
    }
});



app.delete('/books/:id', async (req, res) => {
    try {
        const [result] = await connection.query('DELETE FROM Books WHERE id = ?', [req.params.id]);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: 'Error at trying to delete book' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});