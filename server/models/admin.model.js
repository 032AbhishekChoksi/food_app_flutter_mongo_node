const mongoose = require("mongoose");

const admin = mongoose.model("Admin",
    mongoose.Schema(
        {
            email: {
                type: String,
                require: true,
                unique: true
            },
            password: {
                type: String,
                require: true
            },
        }, {
        timestamps: true,
        toJSON: {
            transform: function (doc, ret) {
                ret.id = ret._id.toString();
                delete ret._id;
                delete ret.__v;
            }
        }
    }
    ));

module.exports = {
    admin
};