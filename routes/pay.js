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
  console.log(req.body);
  const totalDate = req.body.date + "T" + req.body.time + ":00";
  const createdRoomInfo = await createRoom(totalDate);
  await SendToSlack(payChannel, req.body.date + req.body.time);
  await SendToSlack(payChannel, createdRoomInfo.hostUrl);

  res.send(`<a href="${createdRoomInfo.customerUrl}">Join to ZOOM!</a>
            <p>${createdRoomInfo.customerUrl}</p>`);
});

module.exports = router;
