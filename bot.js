const TelegramBot = require("node-telegram-bot-api");
const express = require("express");

// Telegram Bot API tokenni kiritish
const token = "6173250520:AAFVEjjF5fBXpMthbNc_gVmQmBZmyRD4nng";

// Botni yaratish
const bot = new TelegramBot(token, { polling: true });

// Express serverini yaratish
const app = express();

// '/start' buyrug'i uchun javob berish
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const username = msg.chat.username;

  bot.sendMessage(
    chatId,
    `Salom @${username}  Botimizga xush kelibsiz!
Loyihalar bilan tanishish uchun quyidagi tugmalardan foydalaning. 


Yordam bo'limiga o'tish uchun /help buyrug'idan foydalaning .
  `,
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "SaidqodirxonUz",
              callback_data: "tugma1",
            },
            {
              text: "RealCoderUz",
              callback_data: "tugma2",
            },
          ],
          [
            {
              text: "LinuxOsUz",
              callback_data: "tugma3",
            },
            // {
            //   text: "SmartShop",
            //   callback_data: "tugma4",
            // },
          ],
        ],
      },
    }
  );
});

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, "Siz Yordam Bo`limidasiz.");
});

// Inline tugmalarga javob berish
bot.on("callback_query", (callbackQuery) => {
  const message = callbackQuery.message;
  const chatId = message.chat.id;
  const username = message.chat.username;
  const data = callbackQuery.data;

  if (data === "tugma1") {
    bot.sendPhoto(chatId, "https://saidqodirxon.uz/srx.png", {
      caption: `Sizga kerakli  
Foydali postlar 
Lifehacklar 
IT yangiliklar barchasini  
@SaidqodirxonUz kanalidan topishingiz mumkin 

👉 @SaidqodirxonUz biz bilan barchasi oson


Yordam bo'limiga o'tish uchun /help buyrug'idan foydalaning .
      `,
    });
  } else if (data === "tugma2") {
    bot.sendPhoto(chatId, "https://realcoder.uz/rc.png", {
      caption: `Kichik Dasturchining katta BLOGi 😎
@RealCoderUz

/help - Yordam bo'limi .


      `,
    });
  } else if (data === "tugma3") {
    bot.sendPhoto(
      chatId,
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/UbuntuCoF.svg/1200px-UbuntuCoF.svg.png",
      {
        caption: `Assalomu alaykum. 
Ushbu kanal Linux  operatsion sistemasiga endi oʻtganlar va oʻrganuvchilar uchun 
@LinuxOSUz Ushbu Linkga kirib asosiy kanalga ulanib olishingiz mumkin.

Iltimos Kanaldan ma'lumot ko'chirsangiz Manba bilan oling.
        

Yordam bo'limiga o'tish uchun /help buyrug'idan foydalaning .
        `,
      }
    );
    // } else if (data === "tugma4") {
    //   bot.sendMessage(chatId, `@${username}, siz Tugma 4 ni bosdingiz`);
  }
});

console.log("bot ishladi");
