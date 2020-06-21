var express = require('express');
var router = express.Router();
const SendToSlack = require('../lib/SendToSlack');
const messageChannel = process.env.MSGCHANNEL.toString();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.post('/ok', (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const msg = req.body.msg;
  if (name && email && msg) {
    SendToSlack(messageChannel, `名前: ${name}\n email: ${email}\n msg: ${msg}`);
  }
  res.redirect('/');
});

module.exports = router;
