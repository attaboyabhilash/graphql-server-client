import { gql } from "apollo-server-express"

export default gql`
    extend type Query {
        getAllPosts: [Post!]!
        getPostById(id: ID!): Post!
    }

    extend type Mutation {
        createNewPost(newpost: PostInput!): Post!
        updatePostById(updatedPost: PostInput!, id: ID!): Post!
        deletePostById(id: ID!): PostNotification!
    }

    input PostInput {
        title: String!
        content: String!
        featuredImage: String
    }

    type Post {
        id: ID!
        title: String!
        content: String!
        featuredImage: String
        createdAt: String
        updatedAt: String
    }

    type PostNotification {
        id: ID!
        message: String!
        success: Boolean!
    }
`
