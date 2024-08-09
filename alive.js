const axios = require('axios');

const aliveCommand = async (sock, from, message) => {
  const aliveContent = `
𝐈'𝐌 𝐀𝐋𝐖𝐀𝐘𝐒 𝐀𝐋𝐈𝐕𝐄 !

𝗛𝗲𝘆 𝗗𝗔𝗥𝗞-𝗥𝗜𝗢-𝗠𝗗 𝗶𝘀 𝗼𝗻 𝗮𝗹𝗶𝘃𝗲 𝗺𝗼𝗱𝗲🦜

📡 ᴘʟᴀᴛꜰᴏʀᴍᴇ     :
🎓  ʀᴜɪɿᴇ:
> 𝗧𝘆𝗽𝗲 .𝗺𝗲𝗻𝘂 𝘁𝗼 𝗴𝗲𝘁 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝗹𝗶𝘀𝘁📃

"Amidst the complexity of technology, small developers find beauty in simplicity, crafting elegant solutions that make a big difference."

> 𝐃𝐀𝐑𝐊-𝐑𝐈𝐎-𝐁𝐑𝐎𝐓𝐇𝐄𝐑𝐒 </>🇱🇰
> 🦜ᴅᴀʀᴋ-ʀɪᴏ-ᴍᴅ

https://whatsapp.com/channel/0029VaSaZd5CBtxGawmSph1k
`;

  try {
    await sock.sendMessage(from, { text: aliveContent }, { quoted: message });
    console.log('Alive message sent successfully.');
  } catch (error) {
    console.error('Error sending alive message:', error);
  }
};

module.exports = aliveCommand;
