const token = '1739060565:AAEgFfAkJ_0MQRcHQ45MLXna-onyhPFzOfg'
const bot = require('node-telegram-bot-api');
const telBot = new bot(token, { polling: true });

telBot.on('message', (event) => {
    let msg = (event.text);
    let id = event.chat.id;
    let fName = event.from.first_name;
    console.log(fName, msg);

    if (msg === "/start") {
        telBot.sendMessage(id, "Assalomu alaykum" + fName + ",  botimizga xush kelibsiz \nBot ishlashidan avval kerakli tilni tanlang \n /eng \n /ru \n /uz")
    } else if (msg === "/eng") {
        telBot.sendMessage(id, "Sorry, bot is not perfect yet,\n Please try again in two days")
    } else if (msg === "/ru") {
        telBot.sendMessage(id, "Izvenite bot yeshe ne idealen,\n Poprobuyte esho raz cherez dva dnya")
    } else if (msg === "/uz") {
        telBot.sendMessage(id, "Kechirasiz bot hali mukammal emas,\n Iltimos ikki kundan kegin qayta urinib ko'ring")
    }
})