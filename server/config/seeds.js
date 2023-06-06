const db = require('../config/connection');
const { User } = require('../models');

db.once('open', async () => {
    await User.deleteMany();
    await User.create({
        username: 'test',
        email: 'test@testmail.com',
        password: 'test12345',
        Weight: 150,
        Height: 60,
        Age: 25,
        Activity: 'Sedentary',
        Goal: 'Lose Weight',
        subscriptions: 'true'
    });

    await User.create({
        username: 'test2',
        email: 'test2@testmail.com',
        password: 'test12345',
        Weight: 200,
        Height: 62,
        Age: 32,
        Activity: 'Active',
        Goal: 'Gain Weight',
        subscriptions: 'true'
    });

    console.log('users created!');

    process.exit();
});