const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const mysql = require('mysql');

const app = express();
const PORT = 5500;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexão com MySQL
const sequelize = new Sequelize('db_econecta', 'root', 'Senai1234', {
    host: 'localhost',
    dialect: 'mysql'
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    } catch (error) {
        console.error('Erro ao conectar com banco de dados:', error);
    }
})();


// Modelo de Usuário
const User = sequelize.define('User', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dataNascimento: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});

// Sincronizar o modelo
sequelize.sync();

// Rota de Cadastro
app.post('/register', async (req, res) => {
    try {
        const { nome, email, senha, dataNascimento, telefone } = req.body;

        // Verificar se o usuário já existe
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Usuário já existe' });
        }

        // Criptografar a senha
        const hashedPassword = await bcrypt.hash(senha, 10);

        // Criar o usuário
        const user = await User.create({
            nome,
            email,
            senha: hashedPassword,
            dataNascimento,
            telefone
        });

        res.status(201).json({
            id: user.id,
            nome: user.nome,
            email: user.email
        });
    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        res.status(500).json({ message: 'Erro ao registrar usuário' });
    }
});

sequelize.sync({ alter: true }); // Altera a tabela se necessário, mas não exclui dados



// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${5500}`);
});
