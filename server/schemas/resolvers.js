const { AuthentificationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id);
                return user;
            }
            throw new AuthentificationError('Not logged in');
        },
        checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;
            const subscriptions = args.subscriptions;
            const line_items = [];

            const user = await User.findById(context.user._id).populate('subscriptions');

            for (let i = 0; i < subscriptions.length; i++) {
                const subscription = await stripe.subscriptions.create({
                    customer: user.stripeCustomerId,
                    items: [
                        {
                            price: subscriptions[i],
                        },
                    ],
                    payment_behavior: 'default_incomplete',
                    expand: ['latest_invoice.payment_intent'],
                });
                line_items.push({
                    name: subscription.items.data[0].price.product.name,
                    description: subscription.items.data[0].price.product.description,
                    images: [subscription.items.data[0].price.product.images[0]],
                    amount: subscription.items.data[0].price.unit_amount,
                    currency: subscription.items.data[0].price.currency,
                    quantity: 1,
                });
            }

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${url}/`,
            });

            return { session: session.id };
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthentificationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthentificationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findByIdAndUpdate(context.user._id, args, { new: true });
                return user;
            }
            throw new AuthentificationError('Not logged in');
        },
        cancelSubscription: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate('subscriptions');
                const subscription = await stripe.subscriptions.retrieve(user.subscriptions[0].stripeSubscriptionId);
                await stripe.subscriptions.del(subscription.id);
                await user.subscriptions[0].remove();
                return user;
            }
            throw new AuthentificationError('Not logged in');
        }
    }
};

module.exports = resolvers;

