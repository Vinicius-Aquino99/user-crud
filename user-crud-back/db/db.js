const mongoose = require('mongoose');

const uri = 'mongodb+srv://vnaquino99:vnaq99@cluster0.io3ozm9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('✅ Conectado ao MongoDB com Mongoose!');
  } catch (err) {
    console.error('❌ Erro de conexão com MongoDB:', err);
    process.exit(1); // Encerra o processo se falhar
  }
};

module.exports = connectDB;
