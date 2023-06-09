import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        user {
            _id
            username
            email
            Weight
            Height
            Age
            Activity
            Goal
            subscriptions {
                _id
                name
                description
                price
                image
            }
        }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!, $Weight: Int!, $Height: Int!, $Age: Int!, $Activity: String!, $Goal: String!, $subscriptions: [ID]) {
        addUser(username: $username, email: $email, password: $password, Weight: $Weight, Height: $Height, Age: $Age, Activity: $Activity, Goal: $Goal, subscriptions: $subscriptions) {
        token
        user {
            _id
            username
            email
            Weight
            Height
            Age
            Activity
            Goal
            subscriptions {
                _id
                name
                description
                price
                image
            }
        }
        }
    }
`;

export const UPDATE_USER = gql`
    mutation updateUser($username: String, $email: String, $password: String, $Weight: Int, $Height: Int, $Age: Int, $Activity: String, $Goal: String, $subscriptions: [ID]) {
        updateUser(username: $username, email: $email, password: $password, Weight: $Weight, Height: $Height, Age: $Age, Activity: $Activity, Goal: $Goal, subscriptions: $subscriptions) {
        _id
        username
        email
        Weight
        Height
        Age
        Activity
        Goal
        subscriptions {
            _id
            name
            description
            price
            image
        }
        }
    }
`;
