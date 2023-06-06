const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Subscription = require('./Subscription');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'You need to provide a username!',
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: 'You need to provide an email address!',
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    password: {
        type: String,
        required: 'You need to provide a password!',
        minlength: 5
    },
    Weight: {
        type: Number,
        required: 'You need to provide a weight!',
        minlength: 2
    },
    Height: {
        type: Number,
        required: 'You need to provide a height!',
        minlength: 2
    },
    Age: {
        type: Number,
        required: 'You need to provide an age!',
        minlength: 2
    },
    Activity: {
        type: Selection,
        required: 'You need to provide an activity level!',
        minlength: 2
    },
    Goal: {
        type: Selection,
        required: 'You need to provide a goal!',
        minlength: 2
    },
    subscriptions: [Subscription.schema]
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
}

const User = mongoose.model('User', userSchema);

module.exports = User;