const axios = require('axios');

const roomCreator = (date) => {
  const roomop = {};
  roomop.topic = 'ask something';
  roomop.type = '2';
  roomop.start_time = date;
  roomop.timezone = 'Asia/Tokyo';
  roomop.settings = {};
  roomop.settings.use_pmi = 'false';

  return roomop;
};

const createRoom = async (date) => {
  const roomop = roomCreator(date);

  const res = await axios
    .post(
      `https://api.zoom.us/v2/users/${process.env.ZOOM_EMAIL}/meetings`,
      roomop,
      {
        headers: {
          authorization: `Bearer ${process.env.ZOOM_JWT_TOKEN}`
        }
      }
    )
    .catch((err) => {
      throw new Error(err);
    });

  const hostUrl = res.data.start_url;
  const customerUrl = res.data.join_url;
  return { hostUrl, customerUrl };
};

module.exports = createRoom;
