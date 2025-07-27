const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());

const PORT = 3001;
const usuarios = [
    {
        nome : "vinicius",
        email : "vinicius@email.com",
        senha : "1234"
    }
];

app.post('/api/login', (req, res) => {
    const { email, senha } = req.body;

    console.log(`Email recebido: ${email}`)
    console.log(`Senha recebida: ${senha}`)

    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuario) {
        res.status(200).json({ mensagem :'Login bem sucedido!', usuario : { nome: usuario.nome, email: usuario.email } })
    } else {
        res.status(401).json( { mensagem: 'Email ou senha inválidos. ' } )
    }
    
});

app.post('/api/cadastro', (req, res) => {
    const { nome, email, senha } = req.body;

    console.log(`Email recebido: ${email}`)
    console.log(`Nome recebido: ${nome}`)
    console.log(`Senha recebido: ${senha}`)

    const novoUsuario = {
         nome : nome,
        email : email,
        senha : senha
    }

    const isUsuario = usuarios.find(u => u.email === email)

    if (!isUsuario){
        usuarios.push(novoUsuario);
        res.status(200).json({"mensagem": "Cadastro realizado com Sucesso!"});

    } else {
        res.status(401).json({"mensagem": "Email já existente."})
    }



})


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});