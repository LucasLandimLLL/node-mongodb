const mongoose = require ('mongoose')

async function main(){
    try{
    await mongoose.connect('mongodb+srv://lucaslandim:<senhaaqui>!@cluster0.flqef6j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log('banco ok');
} catch (error) {
    console.log ('Erro' + error );
}
}

module.exports = main