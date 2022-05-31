module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
        primaryKey: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            message: 'Please enter your first name'
          }
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            message: 'Please enter your last name'
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            message: 'Email Cannot be null!'
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cpassword: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    return Users;
  };
  