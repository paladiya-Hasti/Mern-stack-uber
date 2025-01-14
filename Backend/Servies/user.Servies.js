

const UserModel = require('../models/user.model'); 

module.exports.createUser = async ({ firstname, lastname, email, password }) => {
    const user = new UserModel({
        firstname,
        lastname,
        email,
        password
    });

    await user.save();
    return user;
};
