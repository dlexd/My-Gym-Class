const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        Weight: Int
        Height: Int
        Age: Int
        Activity: String
        Goal: String
        subscriptions: [Subscription]
    }
    type Subscription {
        _id: ID
        name: String
        description: String
        price: Int
        image: String
    }
    type Checkout {
        session: ID
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        users: [User]
        user(username: String!): User
        subscriptions(username: String): [Subscription]
        subscription(_id: ID!): Subscription
        checkout(subscriptions: [ID]!): Checkout
    }
    type Mutation {
        addUser(username: String!, email: String!, password: String!, Weight: Int!, Height: Int!, Age: Int!, Activity: String!, Goal: String!, subscriptions: [ID]): Auth
        updateUser(username: String, email: String, password: String, Weight: Int, Height: Int, Age: Int, Activity: String, Goal: String, subscriptions: [ID]): User
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;


