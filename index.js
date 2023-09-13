const dotenv = require('dotenv');
dotenv.config();

const { Client, EmbedBuilder, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
  ],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.channelId === '1151502614798798868') {
    console.log('Message : ', message);

    if (
      message.attachments.some((attachment) =>
        attachment.contentType.startsWith('image/')
      )
    ) {
      const messageContent = `Yay! ${message.author.username}, you made it  🔥\nSend your info on : [cloudrscoe@gmail.com](https://mail.google.com/mail/?view=cm&fs=1&to=cloudrscoe@gmail.com)`;
      const buttonLabel = 'Open Gmail';

      const components = [
        {
          type: 1,
          components: [
            {
              type: 2,
              label: buttonLabel,
              style: 5,
              url: 'https://mail.google.com/mail/?view=cm&fs=1&to=cloudrscoe@gmail.com',
            },
          ],
        },
      ];

      const embeds = [];

      const embed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle('**Important**  👁️👄👁️')
        .setDescription(
          'Please send us an email in the `following format` to reserve your spot as one of the `first 80` people who will receive goodies.'
        )
        .setImage(
          'https://wallpapers.com/images/featured/miku-nakano-h9l1l1gmrv07fpmf.jpg'
        );

      embeds.push(embed);

      message.channel.send({
        content: messageContent,
        embeds: embeds,
        components: components,
      });

      //   message.reply({
      //     fetchReply: true,
      //   });

      await message.react('🎉');
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
