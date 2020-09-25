const db = require('../models/index');
const { use } = require('../router');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await db.User.findAll();
    console.log(users);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res) => {
  try {
    const user = await db.Users.findOne({
      where: { username: req.body.username },
    });
    console.log(user);
    user
      ? res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          pumpkins: user.pumpkins,
        })
      : res.status(404).send('User not found.');
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.register = async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      pumpkins: req.body.pumpkins,
      website: req.body.website,
      bio: req.body.bio,
    });
    res.status(200).send('Welcome in!');
  } catch (err) {
    res.status(500).send('Something went wrong!');
  }
};

exports.profile = async (req, res) => {};
