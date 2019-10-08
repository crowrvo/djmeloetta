const fs = require('fs'); //Gerenciador de arquivos - cuida do diretório

module.exports = (client, message) => { //Le as msgs do chat
    fs.readdir('./commands/', (err, files) => { //Puxa todos os comandos da pasta
        files.forEach(file => {
            const commandHandler = require(`../commands/${file}`);
            const commandName = file.split('.')[0];
            if (message.content.startsWith('!' + commandName)) { //Testa se a messagen é um comando existente
                return commandHandler(message); //trás o resultado do comando
            }

            if (message.content.indexOf('porra') !== -1) {
                return message.delete();
            }
        });
    });
}