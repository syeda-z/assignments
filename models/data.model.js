const mongoose = require('mongoose');
//creating a schema for the products to be stored into the DB
const UserSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [true, "please enter first name"],

        },

        lastname: {
            type: String,
            required: [true, "please enter last name"],

        },

        username: {
            type: String,
            required: [true, "please enter user name"],

        },

        email: {
            type: String,
            required: [false, "please enter email"],

        },

        address: {
            type: String,
            required: [true, "please enter address"],

        },

        address2: {
            type: String,
            required: [false, "please enter address 2"],

        },

        country: {
            type: String,
            required: [true, "please choose a country"],

        },

        state: {
            type: String,
            required: [true, "please choose a state"],

        },

        zip: {
            type: Number,
            required: [true, "please enter zip code"],

        },

    },
    {
        timestamps: true
    }
);
//exporting the model
const User = mongoose.model("Customer",UserSchema);
module.exports = User;