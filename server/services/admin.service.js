const { admin } = require("../models/admin.model");

async function CreateAdmin(params, callback) {
    if (!params.email) {
        return callback({
            message: "Email  is Required!"
        }, "");
    }

    if (!params.password) {
        return callback({
            message: "Password  is Required!"
        }, "");
    }

    const model = new admin(params);
    model.save()
        .then((response) => {
            return callback(null, response);
        })
        .catch((error) => {
            return callback(error);
        });
}

module.exports = {
    CreateAdmin
};