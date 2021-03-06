const Discord = require('discord.js')

module.exports = {
    name: "clear",
    category: "Модерация",
    description: "Очистка чата",
    aliases: ['клир', 'очистить', 'очистка'],
    permissions: ['MANAGE_MESSAGES'],
    usage: "clear <кол-во сообщений>",
    async execute(message, args, client) {

        if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
            return message.reply(`мне нужны права на управление сообщениями!`)
        }


        if (!args[0] || Number.isNaN(args[0])) return message.channel.send('Укажите кол-во сообщений для удаления');
        if (+args[0] > 100 || +args[0] < 1) return message.channel.send('Укажите значение от 0 до 100');

        message.delete()

        return message.channel.bulkDelete(+args[0])
            .then((messages) => message.channel.send(`Удалено \`${messages.size}\``))
            .catch((err) => { throw err; });
    }
}