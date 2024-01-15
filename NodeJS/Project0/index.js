const { Telegraf } = require('telegraf');
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);

const binarySearchString = `
 const binarySearch function(arr, target){
    let s = 0, e = arr.length-1;
    while(s<=e){
        let mid = Math.floor((s + e)/2);
        if(arr[mid] == target){
            return mid;
        }
        else if(arr[mid] < target){
            s = mid+1;
        }else{
            e = mid-1;
        }
    }
    return undefined;
}
`;

bot.start((ctx) => ctx.reply('Welcome to razz bot'));
bot.command('binarySearch', (ctx) => ctx.replyWithCode(binarySearchString));

bot.on('sticker',(ctx)=> ctx.reply('💙'));

bot.launch();