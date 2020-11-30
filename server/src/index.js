import express from "express"
import { join } from "path"
import { ApolloServer } from "apollo-server-express"
import { typeDefs, resolvers } from "./graphql"
import mongoose from "mongoose"
import * as AppModel from "./models"
import { success, error } from "consola"
import { DB, MODE, PORT } from "./config"
import AuthMiddleware from "./middlewares/auth"

//Initialize the Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: MODE === "development" ? true : false,
    context: ({ req }) => {
        let { isAuth, user } = req
        return {
            req,
            isAuth,
            user,
            ...AppModel,
        }
    },
})

//Initialize the Express Application
const app = express()
app.use(AuthMiddleware)
app.use(express.static(join(__dirname + "/uploads")))

//Set the Middleware
server.applyMiddleware({ app })

//Start the Apollo Server
const startServer = async () => {
    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        success({
            badge: true,
            message: "Successfully connected to the Database",
        })

        app.listen({ port: PORT }, () =>
            success({
                badge: true,
                message: `Now browse to http://localhost:${PORT}`,
            })
        )
    } catch (err) {
        error({
            badge: true,
            message: err.message,
        })
    }
}

startServer()
