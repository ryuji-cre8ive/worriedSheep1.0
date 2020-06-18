'use strict';

require('dotenv').config();
const { WebClient } = require('@slack/web-api');
const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN.toString();

const Botton = new WebClient(SLACK_BOT_TOKEN);

const SendToSlack = async (ch, msg) => {
  await Botton.chat.postMessage({
    channel: ch,
    text: msg
  });
};

module.exports = SendToSlack;
