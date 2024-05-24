'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    event_start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    event_end_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {});

  Event.associate = function(models) {
    Event.hasMany(models.Contestant, { foreignKey: 'event_id' });
    Event.hasMany(models.Judge, { foreignKey: 'event_id' });
    Event.hasMany(models.Criteria, { foreignKey: 'event_id' });
  };

  return Event;
};