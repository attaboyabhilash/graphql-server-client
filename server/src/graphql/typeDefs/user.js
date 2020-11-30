import { gql } from "apollo-server-express"

export default gql`
    extend type Query {
        authenticateUser(username: String!, password: String!): AuthResponse!
    }
    extend type Mutation {
        registerUser(newUser: UserInput!): AuthResponse!
    }

    input UserInput {
        username: String!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        userAvatar: String
    }

    type User {
        id: ID!
        username: String!
        firstName: String!
        lastName: String!
        email: String!
        userAvatar: String
    }

    type AuthResponse {
        user: User!
        token: String!
    }
`
