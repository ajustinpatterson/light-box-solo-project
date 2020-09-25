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
