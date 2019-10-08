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
                var Arr = new Array(
                    "Mas que palavra feia ",
                    "você não deveria dizer essas coisas ",
                    "Não posso deixar vc falar isso ",
                    "Meus olhos não merecem essa baixaria ",
                    "Você devia melhorar seu linguajar ",
                    "Tem crianças no recinto, seja mais educado "
                );
                message.channel.send(Arr[Math.round(Math.random() * Arr.length) - 1] + message.author);
                message.delete();
            }
        });
    });
}