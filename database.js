//Require para o mongoose, que auxilia na conexão com o banco.
const mongoose = require('mongoose');

//Função que realiza a conexão com o BD
function connectToDatabase(){
    //BD 
    mongoose.connect('mongodb+srv://leonardolino:91525437@cluster0.bbr4t.mongodb.net/sprint2-pb-compass?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    });
    const db = mongoose.connection;
    db.on("error", (error) => console.log(error));
}

//Export da função
module.exports = connectToDatabase;