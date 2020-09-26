const db = require('../models/index');

//TODO: update to get user-specific feed
exports.getUserFeed = async (req, res) => {
  try {
    const images = await db.Image.findAll();
    res.status(200).send(images);
  } catch (err) {
    console.log(err);
    return res.status(422).send({ error: 'No photos' });
  }
};

exports.uploadToDb = async (req, res) => {
  try {
    const author = await req.body.author;
    console.log('author is: ', author);
    if (!author) res.status(422).send('This photo must belong to someone.');
    const exists = await db.Image.findOne({
      where: { author: author },
    });
    if (exists) {
      res.status(422).send('This item already exists.');
    } else {
      const image = await db.Image.create(req.body);
      res.body = image;
      res.status(200);
      res.send(image);
    }
  } catch (err) {
    console.log(req.body, err);
    res.status(500).send('Something went wrong!');
  }
};

exports.func = async (req, res) => {
  try {
    const imageId = await req.params.id;
    const image = await db.Image.findOne({
      where: { id: imageId },
    });

    if (!image) {
      res.status(422).send("This photo doesn't exist");
      res.status(200).send(image);
    }
  } catch (err) {
    console.log(req.body, err);
    res.status(500).send('Something went wrong!');
  }
};

// exports.func= async (req, res) => {
// try {} catch (err){    console.log(req.body, err);
// };

// exports.func= async (req, res) => {
// try {} catch (err){}
// };

// exports.func= async (req, res) => {
// try {} catch (err){}
// };

// exports.func= async (req, res) => {
// try {} catch (err){}
// };

// exports.func= async (req, res) => {
// try {} catch (err){}
// };

// exports.func= async (req, res) => {
// try {} catch (err){}
// };

// exports.func= async (req, res) => {
// try {} catch (err){}
// };
