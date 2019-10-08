require('dotenv').config(); // Pega de modo seguro o token do bot
const Discord = require("discord.js"); //baixar a lib
const fs = require('fs'); //Gerenciador de arquivos - cuida do diretório
const client = new Discord.Client(); // API do discord


fs.readdir('./events/', (err, files) => {

        //Esse proximo comando cria todas as funções de tratamentos dos eventos baseados nas pastas
        fs.readdir('./events/', (err, files) => {
            files.forEach(file => {
                const eventHandler = require(`./events/${file}`)
                const eventName = file.split('.')[0]
                client.on(eventName, (...arg) => eventHandler(client, ...arg))
            })
        })
    }) //Importa todos os eventos pra o projeto


client.login(process.env.BOT_TOKEN) // login do bot usando o token protegido