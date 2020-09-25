const db = require('../models/index');

exports.getAllMedia = async (req, res) => {
  try {
    const images = await db.Image.findAll();
    res.status(200).send(images);
  } catch (err) {
    console.log(err);
    return res.status(422).send({ error: 'No photos' });
  }
};
