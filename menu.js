const axios = require('axios');

const menuCommand = async (sock, from, message) => {
  const menuContent = `╰─╴─★ ᴅᴀʀᴋ-ʀɪᴏ-ᴍᴅ ★─╴──╯
╭──────────────────╮
  🔐 *ʙᴏᴛ ɴᴀᴍᴇ* : ᴅᴀʀᴋ-ʀɪᴏ-ᴍᴅ
  👨‍💻 *ᴅᴇᴠᴇʟᴏᴘᴇʀꜱ* : ᴅᴀʀᴋ-ʀɪᴏ-ʙʀᴏᴛʜᴇʀꜱ
  💦 *ᴡᴏʀᴋᴛʏᴘᴇ* : public
  🎓 *ᴘʀᴇꜰɪx* : . 
  📞 *ɴᴜᴍʙᴇʀ* : 94702481115
  📡 *ᴘʟᴀᴛꜰᴏʀᴍᴇ* : Linux
╰──────────────────╯
> *ᴄᴇʏʟᴏɴ ʙᴇꜱᴛ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ᴡᴀ ʙᴏᴛ* 
> *🦜ᴅᴀʀᴋ-ʀɪᴏ-ᴍᴅ*

1. *.news* - Fetch the latest news.
2. *.ping* - Check the bot's response time.
3. *.menu* - Display this menu.

Feel free to reach out if you have any questions!

📢 Check out our channel here: [Mata One Channel](https://whatsapp.com/channel/0029VaSaZd5CBtxGawmSph1k)
`;

  // URL of the image
  const imageUrl = 'https://i.ibb.co/C26D2mF/ethix.jpg';

  try {
    // Download the image
    const response = await axios({
      url: imageUrl,
      responseType: 'arraybuffer',
    });
    const imageBuffer = Buffer.from(response.data, 'binary');

    // Send the image with the menu content as caption
    await sock.sendMessage(from, {
      image: imageBuffer,
      caption: menuContent,
    }, { quoted: message });

    console.log('Image with menu caption and channel link sent successfully.');
  } catch (error) {
    console.error('Error sending image with menu caption and channel link:', error);
  }
};

module.exports = menuCommand;
