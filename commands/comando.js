module.exports = message => {

    //message.author == aquele que digitou o comando {linkado}
    //message.author.tag == aquele que digitou o comando texto

    //LÓGICA DO COMANDO
    return message.channel.send("Esse comando serve apenas como template");
}