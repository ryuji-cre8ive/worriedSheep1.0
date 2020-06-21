const express = require('express');
const router = express.Router();
const SendToSlack = require('../lib/SendToSlack');
const createRoom = require('../lib/SendToZoom');
const payChannel = process.env.PAYCHANNEL.toString();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('pay');
});

router.post('/ok', async (req, res) => {
  const plan = req.body.date;
  const date = plan.split(' ')[0];
  const time = plan.split(' ')[1];

  const totalDate = date + 'T' + time;
  const createdRoomInfo = await createRoom(totalDate);

  await SendToSlack(payChannel, plan);
  await SendToSlack(payChannel, createdRoomInfo.hostUrl);
  res.send(`<a href="${createdRoomInfo.customerUrl}">Join to ZOOM!</a>
            <p>${createdRoomInfo.customerUrl}</p>`);
});

module.exports = router;
