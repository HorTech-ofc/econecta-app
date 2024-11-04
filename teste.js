const axios = require('axios'); // Importando o Axios para fazer requisições HTTP

// Teste de uma requisição para o endpoint "/register" (cadastro de usuário)
const testarCadastro = async () => {
    try {
        const response = await axios.post('http://localhost:5500/register', {
            nome: 'João Silva',
            email: 'joao.silva@example.com',
            senha: 'senha123',
            dataNascimento: '1990-01-01',
            telefone: '123456789'
        });
        console.log('Usuário cadastrado com sucesso:', response.data);
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error.response ? error.response.data : error.message);
    }
};

// Teste de uma requisição para a nova rota "/teste" (tela de teste)
const testarTelaTeste = async () => {
    try {
        const response = await axios.get('http://localhost:5500/teste');
        console.log('Resposta do endpoint /teste:', response.data);
    } catch (error) {
        console.error('Erro ao acessar o endpoint /teste:', error.response ? error.response.data : error.message);
    }
};

// Chamando as funções de teste
testarCadastro();
testarTelaTeste();
