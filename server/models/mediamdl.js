const { DataTypes } = require('sequelize/types');

module.exports = (sequelize, DataTypes) => {
  sequelize.define('Image', {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data: {
      type: DataTypes.BLOB('long'),
    },
  });

  Image.sync();

  return Image;
};
