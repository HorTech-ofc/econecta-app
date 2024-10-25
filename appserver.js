const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();
 
// Middleware para interpretar JSON
app.use(bodyParser.json());
 
// Conexão com o banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Senai1234',
    database: 'db_econecta'
});
 
// Conectando ao banco de dados
db.connect((err) => {
    if (err) {
        console.log('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL!');
});
 
// Rota para cadastrar um novo usuário com criptografia de senha
app.post('/cadastro', async (req, res) => {
    const { nome, senha, email } = req.body;
 
    if (!nome || !senha || !email) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }
 
    try {
        // Criptografando a senha
        const hashedPassword = await bcrypt.hash(senha, 10);
 
        // Query para inserir o novo usuário no banco
        const query = 'INSERT INTO Tb_Usuarios (EMAIL_usuario, SENHA_usuario, NOME_usuario) VALUES (?, ?, ?)';
        db.query(query, [email, hashedPassword, nome], (err, result) => {
            if (err) {
                console.log('Erro ao salvar os dados:', err);
                return res.status(500).json({ error: 'Erro ao salvar os dados' });
            }
            res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
        });
    } catch (error) {
        console.log('Erro ao criptografar a senha:', error);
        res.status(500).json({ error: 'Erro ao criptografar a senha' });
    }
});
 
// Iniciar o servidor na porta 3001
app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});