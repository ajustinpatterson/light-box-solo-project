const db = require('../models/index');

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
    console.log(req.body);
    const user = await db.User.findOne({
      where: { username: req.body.username },
    });
    console.log(user);
    if (user) {
      res.body = user;
      res.status(200);
      res.send(user);
    } else {
      res.status(404);
      res.send('User not found.');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!email || !password)
      res.status(422).send('Email and password are required.');
    const user = await db.User.findOne({
      where: { username: username },
    });
    //TODO: edge case for existing user
    if (!user) {
      User.create({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        pumpkins: req.body.pumpkins,
        website: req.body.website,
        bio: req.body.bio,
      });
      res.status(200);
      res.send('Welcome in!');
    }
  } catch (err) {
    console.log(req.body);
    res.status(500).send('Something went wrong!');
  }
};

exports.profile = async (req, res) => {};
