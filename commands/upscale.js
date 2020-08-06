const {MessageEmbed} = require('discord.js');
const imageDownloader = require('image-downloader');
const anime4k = require('anime4k');

module.exports = {
    name: "upscale",
    description: "Upscale a image.",
    aliases: [],
    usage: "<image>",

    async senko(client, message, args) {
        if (!message.attachments.array()[0]) {
            return message.channel.send(`:( no attachments`);
        }
        var attachment = message.attachments.array()[0];
        imageDownloader.image({url: attachment.url, dest: './tmpimgs'}).then(async ({filename}) => {
            console.log('a')
            var theImage = new Image();
            var scaler = anime4k.scaler(gl);
            console.log(scaler)
            theImage.src = `${filename}`
            scaler.inputImage(theImage);
            scaler.resize(2.0);
            console.log(scaler)
            return message.channel.send(scaler);
        });
    }
}