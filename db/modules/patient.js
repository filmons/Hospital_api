const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Patient.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    nom: DataTypes.STRING,
    prénom: DataTypes.STRING,
    email: DataTypes.STRING,
    adresse: DataTypes.STRING,
    tele: DataTypes.STRING,
 
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};