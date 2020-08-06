const {MessageEmbed} = require('discord.js');
const imageDownloader = require('image-downloader');

module.exports = {
    name: "upscale",
    description: "Upscale a image.",
    aliases: [],
    usage: "<image>",

    async senko(client, message, args) {
        import waifu2x from "waifu2x";
        if (!message.attachments) {
            return message.channel.send(`:( no attachments`);
        }
        var attachment = message.attachments.array()[0];
        imageDownloader.image({url: attachment.url, dest: './tmpimgs'}).then(async ({filename}) => {
            await waifu2x.upscaleImage(`./tmpimgs/${filename}.png`, `./tmpimgsupscaled/${filename}2x.png`, {noise: 2, scale: 2.0});
            var upscaledImage = require(`./tmpimgsupscaled/${filename}.png`);
            return message.channel.send(upscaledImage);
        });
    }
}