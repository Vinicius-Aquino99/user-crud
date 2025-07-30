const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./db/db');
const Usuario = require('./models/Usuario')

connectDB();

app.use(cors());
app.use(express.json());

const PORT = 3001;

// LOGIN

app.post('/api/login', async (req, res) => {
  const { email, senha } = req.body;

  console.log(`Email recebido: ${email}`);
  console.log(`Senha recebida: ${senha}`);

  try {
    const usuario = await Usuario.findOne({ email, senha });
    if (usuario) {
      res.status(200).json({ mensagem: 'Login bem sucedido!', usuario: { nome: usuario.nome, email: usuario.email } });
    } else {
      res.status(401).json({ mensagem: 'Email ou senha inválidos.' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro no servidor.' });
  }
});

// 🟩 CADASTRO
app.post('/api/cadastro', async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const existente = await Usuario.findOne({ email });
    if (existente) {
      return res.status(401).json({ mensagem: 'Email já existente.' });
    }

    const novoUsuario = new Usuario({ nome, email, senha });
    await novoUsuario.save();

    res.status(200).json({ mensagem: 'Cadastro realizado com Sucesso!' });
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro no servidor ao cadastrar usuário.' });
  }
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});