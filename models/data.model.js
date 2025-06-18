const mongoose = require('mongoose');
//creating a schema for the products to be stored into the DB
const UserSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [true, "please enter first name"],
            minlength: [2,"First name must be atleast 2 characters long"],

        },

        lastname: {
            type: String,
            required: [true, "please enter last name"],
            minlength: [2,"Last name must be atleast 2 characters long"],

        },

        username: {
            type: String,
            required: [true, "please enter user name"],
            unique: true,
            minlength: [3,"User name must be atleast 3 characters long"],

        },

        email: {
            type: String,
            required: false,

        },

        address: {
            type: String,
            required: [true, "please enter address"],

        },

        address2: {
            type: String,
            required: false,

        },

        country: {
            type: String,
            required: [true, "please choose a country"],
            enum: {
                values: [1,2,3],
                message: "PLease choose a valid country",
            },

        },

        state: {
            type: String,
            required: [true, "please choose a state"],
            enum: {
                values: [1,2,3],
                message: "PLease choose a valid state",
            },

        },

        zip: {
            type: Number,
            required: [true, "please enter zip code"],

        },

    },
    {
        timestamps: true //adds createdAT and updatedAT
    }
);
//exporting the model
const User = mongoose.model("User",UserSchema);
module.exports = User;