const Database = require("./_db");
const db = new Database();
const subscriptionManager = require("./_subscriptionManager");
const EventMaker = require("./_eventMaker");
const Maker = new EventMaker({ db, subscriptionManager });

module.exports = async (req, res) => {
  const {
    body: {
      name,
      description,
      image_url,
      society,
      location,
      date_time,
      ticket_price,
      latitude,
      longitude,
      tags,
    },
  } = req;

  try {
    const event_id = await Maker.create({
      name,
      description,
      image_url,
      society,
      location,
      date_time,
      ticket_price,
      latitude,
      longitude,
      tags,
    });
    res.json({
      success: true,
      event_id,
    });
  } catch {
    res.status(400).json({
      success: false,
    });
  }
};
