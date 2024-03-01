'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class schedule extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    schedule.init({

        currentNumber: DataTypes.STRING,
        maxNumber: DataTypes.STRING,
        date: DataTypes.DATE,
        timeType: DataTypes.STRING,
        docterId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'schedule',
    });
    return schedule;
};